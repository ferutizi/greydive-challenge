import './Table.css';

const Table = ({ answers }) => {
    return(
        <table className='table'>
          <thead>
            <tr className='table__row--head'>
              <th className='table__th'>Nombre</th>
              <th className='table__th'>Email</th>
              <th className='table__th'>Fecha de nacimiento</th>
              <th className='table__th'>País de origen</th>
            </tr>
          </thead>
          <tbody>
            {answers ? 
              answers.map(item => 
                    <tr key={item.form.email} className='table__row--item'>
                      <td className='table__item'>{item.form.full_name}</td>
                      <td className='table__item'>{item.form.email}</td>
                      <td className='table__item'>{item.form.birth_date}</td>
                      <td className='table__item'>{item.form.country_of_origin}</td>
                    </tr>
                )
                : <tr><td>Loading...</td></tr>}
          </tbody>
        </table>
    );
}

export default Table;