import { useState } from 'react';
import data from './db.json';

function App() {
  const [formulario, setFormulario] = useState({});
  
  const handleChange = (e) => {
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
          item.type == 'select' ? 
            <>
              <label key={item.label}>{item.label}</label>
              <select name={item.name}>
                {item.options.map(option => 
                  <option key={option.label} value={option.value}>{option.label}</option>
                  )}
              </select>
            </>
          :
            <div key={item.label}>
              <label>{item.type == 'submit' ? '' : item.label}</label>
              <input type={item.type} name={item.name} value={item.value} onChange={handleChange} />
            </div>
          )
        }
      </form>
    </>
  );
}

export default App;
