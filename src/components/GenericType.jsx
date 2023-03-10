import '../App.css';

const GenericType = ({ item, handleChange, checked, index }) => {
    return(
        <div className='form__container'>
            <div className='form__divisor' />
            <label className="form__question">{item.label}</label>
            <input
                type={item.type}
                name={item.name}
                value={item.value}
                onChange={handleChange}
                checked={checked}
                className='form__input'
                data-testid={item.name}
                required
                autoFocus={index === 0 ? true : false}
            />
        </div>
    );
}

export default GenericType;