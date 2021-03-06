import PropTypes from 'prop-types';
import s from './ContactData.module.css';
import { useDispatch } from 'react-redux';
import {delContact} from 'redux/contacts/contacts-operations';

const ContactData = ({ contactObj }) => { 
        
    const dispatch = useDispatch();    
    const deleteContact = e => dispatch(delContact(e.target.dataset.key));
    const {name, id, phone} = contactObj;
    return (
        <>
            <p className={s.textItem}>
                <span>{name}:</span>
                <span>{phone}</span>
            </p>
            <button
                className={s.btn}
                type={"button"}
                data-key={id}
                onClick={deleteContact}>
                Delete
            </button>
        </>
    );
};

ContactData.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};

export default ContactData;