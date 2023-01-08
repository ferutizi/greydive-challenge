import './App.css';
import { useState } from 'react';
import GenericType from './components/GenericType';
import TypeSelect from './components/TypeSelect';
import data from './db.json';
import { setForm, getForms } from './application/api';

function App() {
  const [formulario, setFormulario] = useState({});
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState(null);
  
  const handleChange = (e) => {
    if(e.target.type === 'checkbox') {
      setChecked(!checked)
    }
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(formulario);
    getResponse();
    setFormulario({});
    e.target.reset();
    setChecked(false);
  }

  const getResponse = async () => {
    const response = await getForms();
    setAnswers(response);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        {data.items.map((item, index) => 
          item.type !== 'submit' ? item.type === 'select' ?
            //if type is select
            <TypeSelect item={item} key={item.label} />
          : // if type is other
            <GenericType key={item.label} item={item} handleChange={handleChange} checked={checked} index={index}/>
          : // if type is submit
            <button key={item.label} type='submit' disabled={!checked} className='form__submit'>{item.label}</button>
          )
        }
      </form>
      <p>a</p>
      <div>
        {answers ? 
          answers.map(item => 
            <p key={item.form.email}>{item.form.email}</p>
            )
        : <p>Loading...</p>}
      </div>
    </>
  );
}

export default App;
