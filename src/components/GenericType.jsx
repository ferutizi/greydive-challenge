const GenericType = ({ item, handleChange, checked }) => {
    return(
        <div className='div'>
              <label>{item.label}</label>
              <input
                type={item.type}
                name={item.name}
                value={item.value}
                onChange={handleChange}
                checked={checked}
                />
        </div>
    );
}

export default GenericType;