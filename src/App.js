import './App.css';
import { useState } from 'react';
import { getForms, setForm } from './application/api';
import { Routes, Route } from 'react-router-dom';
import useForm from './hooks/useForm';
import Home from './pages/Home';
import Answers from './pages/Answers';

function App() {
  const [answers, setAnswers] = useState(null);
  const [modal, setModal] = useState(false)

  const inicial = {}
  const [formulario, handleChange, reset, checked, setChecked] = useForm(inicial);

  const getResponse = async () => {
    const response = await getForms();
    setAnswers(response);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(formulario);
    getResponse();
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
            checked={checked}
            modal={modal}
            setModal={setModal} 
          /> }
        />
        <Route path='/answers' element={<Answers answers={answers} />} />
      </Routes>
    </>
  );
}

export default App;
