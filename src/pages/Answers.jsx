import { Link } from "react-router-dom";
import Table from "../components/Table";

const Answers = ({ answers }) => {
    return(
      <>
        <Link to="/">
          <button type="button" className="form__submit" style={{fontSize: '1em', width: '6em' }}>volver</button>
        </Link>
        <Table answers={answers} />
      </>
    );
}

export default Answers;
