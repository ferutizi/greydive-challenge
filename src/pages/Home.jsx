import GenericType from '../components/GenericType';
import TypeSelect from '../components/TypeSelect';
import data from '../db.json';
import Modal from '../components/Modal';

const Home = ({ handleSubmit, handleChange, checked, modal, setModal, errors, handleBlur }) => {
    return(
      <>
        <form onSubmit={handleSubmit} className='form'>
          {data.items.map((item, index) => 
            item.type !== 'submit' ? item.type === 'select' ?
              //if type is select
              <TypeSelect item={item} key={item.label} handleChange={handleChange} errors={errors} />
            : // if type is other
              <GenericType key={item.label} item={item} handleChange={handleChange} checked={checked} index={index} errors={errors} handleBlur={handleBlur}/>
            : // if type is submit
              <button key={item.label} type='submit' disabled={!checked} className='form__submit'>{item.label} handleBlur={handleBlur}</button>
            )
          }
        </form>
        <div>
          {modal ? 
            <Modal setModal={setModal} />
            : null
          }
        </div>
      </>
    );
}

export default Home;