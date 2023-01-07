import './App.css';
import { useState } from 'react';
import GenericType from './components/GenericType';
import TypeSelect from './components/TypeSelect';
import data from './db.json';
import { setForm } from './application/api';
import { getForm } from './application/api';

function App() {
  const [formulario, setFormulario] = useState({});
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState({})
  
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
    getResponse(formulario.email);
    setFormulario({});
    e.target.reset();
    setChecked(false);
  }

  const getResponse = async (email) => {
    const response = await getForm(email);
/*     setAnswers(response); */
    console.log(response, /* answers */);
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
    </>
  );
}

export default App;
