import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import styles from "./Navbar.module.css";
import audio from "../../assets/Sal Priadi.mp3";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={`${styles.navbar} ${isActive && styles["nav-black"]}`}>
      <img
        className={styles.logo}
        src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="NETFLIX"
      />
      <img
        className={styles.avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="AVATAR"
      />
      <ReactAudioPlayer
        style={{
          position: "relative",
          left: "38%",
        }}
        src={audio}
        autoPlay
        controls
      />
    </div>
  );
};

export default Navbar;
