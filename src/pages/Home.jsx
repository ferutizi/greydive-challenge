import GenericType from '../components/GenericType'
import TypeSelect from '../components/TypeSelect'
import data from '../db.json'
import { Link } from 'react-router-dom';

const Home = ({ handleSubmit, handleChange, checked }) => {
    return(
      <form onSubmit={handleSubmit} className='form'>
        {data.items.map((item, index) => 
          item.type !== 'submit' ? item.type === 'select' ?
            //if type is select
            <TypeSelect item={item} key={item.label} handleChange={handleChange} />
          : // if type is other
            <GenericType key={item.label} item={item} handleChange={handleChange} checked={checked} index={index}/>
          : // if type is submit
            <button key={item.label} type='submit' disabled={!checked} className='form__submit'>{item.label}</button>
/*             <Link to="/answers">
            </Link> */
          )
        }
      </form>
    );
}

export default Home;