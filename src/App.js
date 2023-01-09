import './App.css';
import { useState } from 'react';
import { getForms, setForm } from './application/api';
import { Routes, Route } from 'react-router-dom';
import useForm from './hooks/useForm';
import Home from './pages/Home';
import Answers from './pages/Answers';

const validateForm = (formulario) => {
  let errors = {};

  if(!formulario.email.trim()) {
    errors.required = '*Este campo es requerido' 
  }

  return(errors);
}

function App() {
  const [answers, setAnswers] = useState(null);
  const [modal, setModal] = useState(false)

  const inicial = {}
  const [formulario, setFormulario, handleChange, reset, checked, setChecked, errors, handleBlur] = useForm(inicial, validateForm);

  const getResponse = async () => {
    const response = await getForms();
    setAnswers(response);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(formulario);
    getResponse();
    setFormulario({});
    reset();
    e.target.reset();
    setChecked(false);
    setModal(true);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            checked={checked}
            modal={modal}
            setModal={setModal} 
            errors={errors}
          /> }
        />
        <Route path='/answers' element={<Answers answers={answers} />} />
      </Routes>
    </>
  );
}

export default App;
