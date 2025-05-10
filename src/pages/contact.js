import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, phone, description };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Your form has been submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your form. Please try again.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "phone") setPhone(value);
    else if (name === "description") setDescription(value);
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Enter your Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="description" className={styles.formlabel}>
            Elaborate your concern
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
