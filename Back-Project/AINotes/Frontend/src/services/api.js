import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import { store } from "../redux/store";

const getAuthHeader = () => {
    
    const token = store.getState().user.token || localStorage.getItem("token")
    return token ? { Authorization: `Bearer ${token}` } : {}
}

export const getCurrentUser = async (dispatch) => {
    try {
        const result = await axios.get(serverUrl + "/api/user/currentuser", {
            withCredentials: true,
            headers: getAuthHeader()
        });
        dispatch(setUserData(result.data));
    } catch (error) {
        console.log(error);
    }
};

export const generateNotes = async (payload) => {
    try {
        const result = await axios.post(
            serverUrl + "/api/notes/generate-notes",
            payload,
            {
                withCredentials: true,
                headers: getAuthHeader()
            }
        );
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const downloadPdf = async (result) => {
    try {
        const response = await axios.post(
            serverUrl + "/api/pdf/generate-pdf",
            { result },
            {
                responseType: "blob",
                withCredentials: true,
                headers: getAuthHeader()
            }
        )
        const blob = new Blob([response.data], { type: "application/pdf" })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "ExaamDostAI.pdf"
        link.click()
        window.URL.revokeObjectURL(url)
    } catch (error) {
        throw new Error("PDF Download Failed")
    }
}

export const getMyNotes = async () => {
    try {
        const result = await axios.get(serverUrl + "/api/notes/getnotes", {
            withCredentials: true,
            headers: getAuthHeader()
        })
        return result.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getSingleNote = async (noteId) => {
    try {
        const result = await axios.get(serverUrl + `/api/notes/${noteId}`, {
            withCredentials: true,
            headers: getAuthHeader()
        })
        return result.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
