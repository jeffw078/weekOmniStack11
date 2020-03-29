import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';


export default function NewIncident(){


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [value, setValue] = useState('');

const ongId = localStorage.getItem('ongId');

const history = useHistory();

async function handleNewIncident(e){
e.preventDefault();
const data = {
title,
description,
value,
};

try{
await api.post('incidents', data, {
headers: {
  Authorization: ongId,
}
})
history.push('/profile');
}catch (err){
alert('Não foi possível cadastrar, tente novamente');
}}

return(
<div className="new-incident-container">
      <div className="content">
          <section>
        <img src={logoImg} alt="Be the Hero"/>
          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um Herói para seu caso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
            </Link>
          </section>
      
      <form onSubmit={handleNewIncident}>
        <input 
        placeholder="Título do Caso"
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        <textarea 
        type="text" placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
        <input 
        placeholder="Valor em Reais"
        value={value}
        onChange={e => setValue(e.target.value)}
        />    
        
        <button type="submit" className="button" >Cadastrar</button>
        
      </form>
      </div>
  </div>

);
}
