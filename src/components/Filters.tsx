import React, { useState, useEffect } from "react";
import "../styles/Filters.css";
import { useDispatch } from "react-redux";
import { GET_NOMBRE, GET_DIRECCION, GET_CATEGORIA } from "../redux/actions";
import categorias from "../categorias";

const Filters: React.FC = () => {
    
  const [nombre, setNombre] = useState<string>("");
  const [direccion, setDireccion] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");

  function handleChange(e: any) {
    setNombre(e.target.value);
  }

  function handleChange1(e: any) {
    setDireccion(e.target.value);
  }
  function handleChange2(e: any) {
    setCategoria(e.target.value);
  }

  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const dispatch3 = useDispatch();

  useEffect(() => {
    dispatch(GET_NOMBRE(nombre));
  }, [nombre]);

  useEffect(() => {
    dispatch2(GET_DIRECCION(direccion));
  }, [direccion]);

  useEffect(() => {
    dispatch3(GET_CATEGORIA(categoria));
  }, [categoria]);

  return (
    <div className="filters">
      <div className="filter_div">
        <form className="searchbar">
          <input
            type="text"
            onChange={handleChange}
            name="nombre"
            value={nombre}
            placeholder="Filtra por nombre"
          />
        </form>
      </div>

      <div className="filter_div">
        <form className="searchbar">
          <input
            type="text"
            onChange={handleChange1}
            name="direccion"
            value={direccion}
            placeholder="Filtra por direccion"
          />
        </form>
      </div>

      <div className="filter_div">
        <select
          name="categoria"
          onChange={handleChange2}
          className="select_categoria"
        >
          <option disabled></option>

          {categorias.map((i: any) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
