import '../App.css';

const GenericType = ({ item, handleChange, checked, index, errors, handleBlur }) => {
    return(
        <div className='form__container'>
            <div className='form__divisor' />
            <label className="form__question">{item.label}</label>
            <input
                type={item.type}
                name={item.name}
                value={item.value}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={checked}
                className='form__input'
                autoFocus={index === 0 ? true : false}
            />
            {errors.required && <p>{errors.required}</p>}
        </div>
    );
}

export default GenericType;