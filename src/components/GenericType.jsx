import '../App.css';

const GenericType = ({ item, handleChange, checked, index }) => {
    return(
        <div className='form__container'>
            <label className="form__question">{item.label}</label>
            <input
                type={item.type}
                name={item.name}
                value={item.value}
                onChange={handleChange}
                checked={checked}
                className='form__input'
                autoFocus={index === 0 ? true : false}
            />
        </div>
    );
}

export default GenericType;