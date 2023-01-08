import { Link } from "react-router-dom";

const Modal = ({ setModal }) => {
    return(
        <div>
            <p>¿Quieres ver las respuestas enviadas?</p>
            <div>
                <button type="button" onClick={() => setModal(false)}>Cancelar</button>
                <Link to="/answers">
                    <button>Ver</button>
                </Link>
            </div>
        </div>
    );
}

export default Modal;