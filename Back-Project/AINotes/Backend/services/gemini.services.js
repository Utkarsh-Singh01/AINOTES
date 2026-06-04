const MODELS = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",  // fallback if first overloaded
];

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const generateGeminiResponse = async (prompt) => {
    for (const model of MODELS) {
        let delayMs = 3000;

        for (let attempt = 1; attempt <= 3; attempt++) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }]
                    })
                });

                if (!response.ok) {
                    const err = await response.json();
                    console.error(`Gemini error [${model}] attempt ${attempt}:`, err);

                    // 503 = overloaded → retry
                    if (err.error?.code === 503 && attempt < 3) {
                        console.log(`Retrying ${model} in ${delayMs / 1000}s...`);
                        await wait(delayMs);
                        delayMs *= 2; // 3s → 6s → 12s
                        continue;
                    }

                    // 503 on last attempt → try next model
                    if (err.error?.code === 503) break;

                    throw new Error(JSON.stringify(err.error?.message || err));
                }

                const data = await response.json();
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

                if (!text) throw new Error("No text returned from Gemini");

                const cleanText = text
                    .replace(/```json/g, "")
                    .replace(/```/g, "")
                    .trim();

                return JSON.parse(cleanText);

            } catch (error) {
                console.error(`Gemini fetch error [${model}] attempt ${attempt}:`, error.message);

                if (attempt < 3) {
                    await wait(delayMs);
                    delayMs *= 2;
                }
            }
        }

        console.log(`All attempts failed for ${model}, trying next model...`);
    }

    throw new Error("Gemini API fetch failed after all retries");
};