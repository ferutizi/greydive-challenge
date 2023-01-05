import data from './db.json';

function App() {
  return (
    <>
      {data.items.map(item => 
        item.type == 'select' ? 
          <>
            <label>{item.label}</label>
            <select name={item.name}>
              {item.options.map(option => 
                <option value={option.value}>{option.label}</option>
                )}
            </select>
          </>
        :
          <div key={item.label}>
            <label>{item.label}</label>
            <input type={item.type}></input>
          </div>
        )}
    </>
  );
}

export default App;
