import React from 'react';
import './App.css';
import Card from './components/Card';
import Detail from './components/Detail';
import Form from './components/Form';
import Nav from './components/Nav';
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
        <Route path='/' element={<><Nav/><Filters/><Card /></>} />     
        <Route path='/detalles/:id' element={<><Nav/><Detail/></>} />
        <Route path='/formulario' element={<><Nav/><Form/></>} />
        <Route path='/formularioEmprendimiento' element={<><Nav/><FormEmprendimiento/></>} />
        <Route path='/formularioEmail' element={<><Nav/><FormEmail/></>} />
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
