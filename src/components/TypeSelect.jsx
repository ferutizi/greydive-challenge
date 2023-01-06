import '../App.css';

const TypeSelect = ({ item }) => {
    return(
        <div className='form__container'>
            <div className='form__divisor' />
            <label className="form__question">{item.label}</label>
            <select name={item.name} className='form__select select'>
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