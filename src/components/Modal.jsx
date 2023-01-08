import './Modal.css';
import { Link } from "react-router-dom";

const Modal = ({ setModal }) => {
    return(
        <div className="modal__container">
            <div className='modal__card'>
                <p className='modal__title'>El formulario se ha enviado</p>
                <p className="modal__description">¿Quieres ver las respuestas enviadas?</p>
                <div className='modal__flex'>
                    <div>
                        <button className="modal__button" type="button" onClick={() => setModal(false)}>Cancelar</button>
                    </div>
                    <div>
                        <Link to="/answers">
                            <button type="button" onClick={() => setModal(false)} className="modal__button">Ver</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;