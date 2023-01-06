const TypeSelect = ({ item }) => {
    return(
        <div>
            <label>{item.label}</label>
            <select name={item.name}>
            {item.options.map(option => 
                <option key={option.label} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    );
}

export default TypeSelect;