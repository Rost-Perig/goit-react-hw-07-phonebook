import { createAsyncThunk } from '@reduxjs/toolkit'; // при использовании createAsyncThunk
import axios from 'axios';
import {
  /*=без использования createAsyncThunk=*/

    // addContactRequest,
    // addContactSuccess,
    // addContactError,
    // fetchContactsRequest,
    // fetchContactsSuccess,
    // fetchContactsError,
    // delContactRequest,
    // delContactSuccess,
    // delContactError
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

axios.defaults.baseURL = 'https://6191e46441928b00176901ac.mockapi.io/api/v1';

/*================при использовании createAsyncThunk================*/

export const addContact = createAsyncThunk(
  'inputsForm/addContact',
  //====c обработкщй ошибок====//
  async ({name, phone}, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', {name, phone});
      // console.log('data: ', response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },

  //====без обработки ошибок====//
  // async ({name, phone}) => {
  //   const response = await axios.post('/contacts', {name, phone});
  //   return response.data;
  // }
);

export const delContact = createAsyncThunk(
  'contactData/delContact',
  //====c обработкщй ошибок====//
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      // console.log('id: ', response.data)
      return response.data.id
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  
  //====без обработки ошибок====//
  // async (contactId) => {
  //   const response = await axios.delete(`/contacts/${contactId}`);
  //   return response.data.id
  // }
);

export const fetchContacts = createAsyncThunk(
  'contactList/fetchContacts',
  //====c обработкщй ошибок====//
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error);
    }
  },

  //====без обработки ошибок====//
  // async () => {
  //   const response = await axios.get('/contacts');
  //   return response.data
  // }
);



/*================без использования createAsyncThunk================*/

// export const addContact = (name, phone) => async dispatch => {
//   const contact = {
//     name,
//     phone,
//   };

//   dispatch(addContactRequest());
//   try {
//     const { data } = await axios.post('/contacts', contact);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   };

//     // axios
//     //     .post('/contacts', contact)
//     //     .then(({ data }) => dispatch(addContactSuccess(data)))
//     //     .catch(error => dispatch(addContactError(error)));
// };

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());
//     try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   };

//   // axios
//   //   .get('/contacts')
//   //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //   .catch(error => dispatch(fetchContactsError(error)))
// };

// export const delContact = contactId => async dispatch => {
//   dispatch(delContactRequest());
//   // try {
//   //   const { data } = await axios.delete(`/contacts/${contactId}`);
//   //   dispatch(delContactSuccess(contactId));
//   // } catch (error) {
//   //   dispatch(delContactError(error));
//   // }

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(delContactSuccess(contactId)))
//     .catch(error => dispatch(delContactError(error)));
// };