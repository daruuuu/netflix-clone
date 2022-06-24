import React, { useState } from "react";
import styles from "./Banner.module.css";
import banner from "../../assets/banner1.png";
import Form from "../Form/Form";

const Banner = () => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const closeFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div>
      <header
        className={styles.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center-center",
        }}
      >
        <div className={`${styles["banner-contents"]}`}>
          <h1 className={styles["banner-title"]}>HBD Cantik Ak</h1>
          <div className={`${styles["banner-buttons"]}`}>
            <button
              className={`${styles["banner-button"]}`}
              onClick={showFormHandler}
              required
            >
              Masukin wish ayangg
            </button>
          </div>

          <h1 className={`${styles["banner-description"]}`}>
            Selamat ulang tahun, tokoh kesayanganku. Semoga semua hal-hal baik
            yang kamu semogakan tercapai diumur sekarang, aku cuma mau kamu
            sehat terus jangan maksa kurus. Cus u already beautiful u dont need
            to be skinny to be pretty. And lemme let make you happy
          </h1>
        </div>

        <div className={`${styles["banner-fade"]}`} />
      </header>
      {showForm && <Form onClose={closeFormHandler} />}
    </div>
  );
};

export default Banner;
