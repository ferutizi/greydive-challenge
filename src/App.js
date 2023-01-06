import { useState } from 'react';
import GenericType from './components/GenericType';
import TypeSelect from './components/TypeSelect';
import data from './db.json';

function App() {
  const [formulario, setFormulario] = useState({});
  const [checked, setChecked] = useState(false);
  
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
    console.log(formulario);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {data.items.map(item => 
          item.type !== 'submit' ? item.type === 'select' ?
            //if type is select
            <TypeSelect item={item} key={item.label} />
          : // if type is other
            <GenericType key={item.label} item={item} handleChange={handleChange} checked={checked}/>
          : // if type is submit
            <button key={item.label} type='submit' disabled={!checked}>{item.label}</button>
          )
        }
      </form>
    </>
  );
}

export default App;
