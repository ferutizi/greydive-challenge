import './App.css';
import { useState } from 'react';
import { getForms, setForm } from './application/api';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Answers from './pages/Answers';

function App() {
  const [answers, setAnswers] = useState(null);
  const [formulario, setFormulario] = useState({});
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false)

  const getResponse = async () => {
    const response = await getForms();
    setAnswers(response);
  }

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
    if(e.target.type === 'checkbox') {
      setChecked(!checked)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(formulario);
    getResponse();
    setFormulario({});
    e.target.reset();
    setChecked(false);
    setModal(true);
  }

  return (
    <>
      {modal ? 
        <Link to="./answers">
          <div>ver</div>
        </Link>
       : null}
      <Routes>
        <Route path='/' element={
          <Home handleSubmit={handleSubmit} handleChange={handleChange} checked={checked} />
        } />
        <Route path='/answers' element={<Answers answers={answers} />} />
      </Routes>
    </>
  );
}

export default App;
