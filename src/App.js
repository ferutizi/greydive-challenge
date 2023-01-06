import { useState } from 'react';
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
          item.type === 'select' ?
            <div key={item.label}>
              <label>{item.label}</label>
              <select name={item.name}>
                {item.options.map(option => 
                  <option key={option.label} value={option.value}>{option.label}</option>
                  )}
              </select>
            </div>
          :
            <div key={item.label}>
              <label>{item.type === 'submit' ? '' : item.label}</label>
              <input
                type={item.type}
                name={item.name}
                value={item.value}
                onChange={handleChange}
                checked={checked}
                disabled={item.type === 'submit' ? !checked : false}
                />
            </div>
            
          )
        }
      </form>
    </>
  );
}

export default App;
