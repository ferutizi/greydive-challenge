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
            <TypeSelect item={item} key={item.label} handleChange={handleChange} />
          : // if type is other
            <GenericType key={item.label} item={item} handleChange={handleChange} checked={checked} index={index}/>
          : // if type is submit
            <button key={item.label} type='submit' disabled={!checked} className='form__submit'>{item.label}</button>
          )
        }
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Fecha de nacimiento</th>
              <th>País de origen</th>
            </tr>
          </thead>
          <tbody>
            {answers ? 
              answers.map(item => 
                    <tr key={item.form.email}>
                      <td>{item.form.full_name}</td>
                      <td>{item.form.email}</td>
                      <td>{item.form.birth_date}</td>
                      <td>{item.form.country_of_origin}</td>
                    </tr>
                )
                : <tr><td>Loading...</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
