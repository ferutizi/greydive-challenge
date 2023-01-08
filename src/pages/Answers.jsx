import { Link } from "react-router-dom";
import Table from "../components/Table";

const Answers = ({ answers }) => {
    return(
      <>
        <Link to="/">
          <p>volver</p>
        </Link>
        <Table answers={answers} />
      </>
    );
}

export default Answers;
