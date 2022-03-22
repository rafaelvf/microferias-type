import React, { useEffect } from "react";
import "../styles/Detail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GET_FERIA } from "../redux/actions";
import dateFormat from "dateformat";

const Detail: React.FC = () => {
  interface Feria {
    name: string;
    date: string;
    address: string;
    description: string;
    categories: [];
    image: string;
  }
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_FERIA(id));
  }, []);

  const { feria } = useSelector((state: any) => state.allFerias);
  const feriaFiltrada: Feria = feria[0];

  return (
    feria.length && (
      <div className="details">
        <img src={feriaFiltrada.image} alt=""></img>
        <h1>{feriaFiltrada.name}</h1>
        <span>{dateFormat(feriaFiltrada.date, "d, mmmm, yyyy")}</span>
        <span>{feriaFiltrada.address}</span>
        <p> {feriaFiltrada.description}</p>
      </div>
    )
  );
};

export default Detail;
