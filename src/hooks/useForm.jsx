import { useState } from "react";

const useForm = (inicial, validateForm) => {
    const [formulario, setFormulario] = useState(inicial);
    const [checked, setChecked] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value
        })
        if(e.target.type === 'checkbox') {
          setChecked(!checked);
        }
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(formulario));
      }

    const reset = () => {
        setFormulario(inicial);
    }

    return(
        [formulario, setFormulario, handleChange, reset, checked, setChecked, errors, handleBlur]
    );
}

export default useForm;