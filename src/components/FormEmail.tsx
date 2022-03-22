import axios from "axios";
import React, { useState } from "react";
import "../styles/FormEmail.css";
import URLrequests from "../constantes";

const FormEmail: React.FC = () => {
  interface Mail {
    email: string;
  }

  const [email, setMail] = useState<Mail>({
    email: "",
  });

  function handleChange(e: any) {
    setMail((prevEmail) => {
      return {
        ...prevEmail,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!email.email) {
      alert("Por favor llenar todos los campos");
    } else {
      await axios
        .post(`${URLrequests}consumidores`, email)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      alert("Has sido registrado!");
      setMail((prevEmail) => {
        return {
          ...prevEmail,
          email: "",
        };
      });
    }
  }

  return (
    <div className="formEmail">
      <h1>Microferias</h1>
      <form onSubmit={handleSubmit}>
        <h5>Se el primero en enterarte</h5>
        <h6>
          Suscribete con tu email para recibir informacion sobre todas nuestras
          ferias
        </h6>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={email.email}
        />
        <button className="button">
          <p>Subscribete</p>
        </button>
      </form>
    </div>
  );
};

export default FormEmail;
