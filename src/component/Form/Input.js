import React, { useState } from "react";
import classes from "./Form.module.css";

const Input = (props) => {
  const [wish, setWish] = useState("");

  const confirmHandler = async (event) => {
    event.preventDefault();

    await fetch(
      "https://hbd-pb-default-rtdb.asia-southeast1.firebasedatabase.app//wish.json",
      {
        method: "POST",
        body: JSON.stringify({
          wish: wish,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        alert("onghee ayannggg, bisa ngisi lagiii");
        setWish("");
      }
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control}`}>
        <label style={{ color: "white" }} htmlFor="wish">
          Masukin Wish
        </label>
        <br />
        <input
          type="text"
          id="wish"
          onChange={(event) => setWish(event.target.value)}
          value={wish}
          style={{ padding: "20px 0" }}
        />
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          style={{ color: "white" }}
          onClick={props.onClose}
        >
          Udah
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Input;
