import React from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserData } from "../redux/userSlice";
import { serverUrl } from "../App";
import { useDispatch } from "react-redux";

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="z-10 mx-6 mb-6 mt-15 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 px-8 py-8 shadow-[0 25px 60px rgba(0,0,0,0.7)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <motion.div
          whileHover={{ rotateX: 6, rotateY: -6 }}
          className="flex flex-col gap-4 transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="flex items-center gap-3 cursor-pointer"
            style={{ transform: "translateZ(20px)" }}
          >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            <span
              className="text-lg font-bold bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent"
              style={{ textShadow: "0 6px 18px rgba(0,0,0,0.4) " }}
            >
              𝙀𝙭𝙖𝙖𝙢𝘿𝙤𝙨𝙩𝘼𝙄
            </span>
          </div>
          <p className="text-sm text-gray-300 max-w-sm">
            𝙀𝙭𝙖𝙖𝙢𝘿𝙤𝙨𝙩𝘼𝙄 helps students generate exam-focued notes revison material,
            diagram & printable PDFs using AI
          </p>
        </motion.div>

        <div className="text-center">
          <h1 className="text-sm font-bold mb-4 text-white">Quick Links</h1>
          <ul className="text-sm space-y-2">
            <li
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => navigate("/notes")}
            >
              Notes
            </li>
            <li
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => navigate("/history")}
            >
              History
            </li>
            <li
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => navigate("/pricing")}
            >
              Add Credits
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h1 className="text-sm font-bold mb-4 text-white">
            Support & Accounts
          </h1>
          <ul className="text-sm space-y-2">
            <li
              className="text-red-400 hover:text-red-500 transition-colors cursor-pointer"
              onClick={handleSignOut}
            >
              SignOut
            </li>
            <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              support@exaamdostai.com
            </li>
          </ul>
        </div>
      </div>

      <div className="my-6 h-px bg-white/10">
        <p className="pt-2 text-center text-gray-200 text-sm">
          © {new Date().getFullYear()} 𝙀𝙭𝙖𝙖𝙢𝘿𝙤𝙨𝙩𝘼𝙄 All rights reserved. <br />
          Made with ❤️ by Utkarsh Singh
        </p>
      </div>
    </motion.div>
  );
}

export default Footer;
