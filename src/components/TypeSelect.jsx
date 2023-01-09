import '../App.css';

const TypeSelect = ({ item, handleChange, errors }) => {
    return(
        <div className='form__container'>
            <div className='form__divisor' />
            <label className="form__question">{item.label}</label>
            <select name={item.name} onChange={handleChange} className='form__select select'>
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
            <div>
            {errors.required && <p>{errors.required}</p>}
            </div>
        </div>
    );
}

export default TypeSelect;