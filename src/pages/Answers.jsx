import { Link } from "react-router-dom";

const Answers = ({ answers }) => {
    console.log(answers)
    return(
      <div>
        <Link to="/">
          <p>volver</p>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Fecha de nacimiento</th>
              <th>País de origen</th>
            </tr>
          </thead>
          <tbody>
            {answers ? 
              answers.map(item => 
                    <tr key={item.form.email}>
                      <td>{item.form.full_name}</td>
                      <td>{item.form.email}</td>
                      <td>{item.form.birth_date}</td>
                      <td>{item.form.country_of_origin}</td>
                    </tr>
                )
                : <tr><td>Loading...</td></tr>}
          </tbody>
        </table>
      </div>
    );
}

export default Answers;
