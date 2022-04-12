import React from 'react';
import './App.css';
import Card from './components/Card';
import Detail from './components/Detail';
import Form from './components/Form';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FormEmprendimiento from './components/FormEmprendimiento';
import FormEmail from './components/FormEmail';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';
import Filters from './components/Filters';

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Nav/><Filters/><Card /><Footer/></>} />     
        <Route path='/detalles/:id' element={<><Nav/><Detail/><Footer/></>} />
        <Route path='/formulario' element={<><Nav/><Form/><Footer/></>} />
        <Route path='/formularioEmprendimiento' element={<><Nav/><FormEmprendimiento/><Footer/></>} />
        <Route path='/formularioEmail' element={<><Nav/><FormEmail/><Footer/></>} />
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
