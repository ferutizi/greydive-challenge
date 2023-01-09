import { useState } from "react";

const useForm = (inicial) => {
    const [formulario, setFormulario] = useState(inicial);
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value
        })
        if(e.target.type === 'checkbox') {
          setChecked(!checked);
        }
    }

    const reset = () => {
        setFormulario(inicial);
    }

    return(
        [formulario, setFormulario, handleChange, reset, checked, setChecked]
    );
}

export default useForm;