import '../App.css';

const TypeSelect = ({ item, handleChange }) => {
    return(
        <div className='form__container'>
            <div className='form__divisor' />
            <label className="form__question">{item.label}</label>
            <select name={item.name} onChange={handleChange} required className='form__select select'>
                <option hidden selected>Seleccione un país</option>
                {item.options.map(option => 
                    <option
                        key={option.label}
                        value={option.value}
                        className='select__option'
                    >{option.label}
                    </option>
                )}
            </select>
        </div>
    );
}

export default TypeSelect;