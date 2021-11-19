/*=================ВАРИАНТ с Redux Toolkit, как-то очень просто и не заморочено, но работает=================*/

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;


/*=================ВАРИАНТ с Redux Toolkit, как-то заморочено=================*/

// import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
// import contactsReducer from './contacts/contacts-reducer';


// /*вариант с OOOOOOOOOOOOOOOOчень замороченой и пока непонятной, но рабочей записью в localStorage*/

// // import {combineReducers } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';  //для записи в локал сторидж

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// // const persistConfig = {
// //     key: 'localStorageContacts',
// //     storage,
// // };

// // const rootReducer = combineReducers({ contacts: contactsReducer });

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const store = configureStore({
// //     reducer: persistedReducer,
// //     middleware,
// //     devTools: process.env.NODE_ENV === 'development' //devTools будет доступно только в процессе разработки (как и надо)
// // });

// // const persistor = persistStore(store);

// // const modStore = { store, persistor };

// // export default modStore;

// /*вариант с записью в localStorage по "рабоче-крестьянски", без заморочек*/

// // import { configureStore } from "@reduxjs/toolkit";
// // import contactsReducer from './contacts/contacts-reducer';

// const store = configureStore({
//   reducer: { contacts: contactsReducer }, // рутовый (корневой) редюсер создается автоматически под капотом toolkit
//   middleware,
//   devTools: process.env.NODE_ENV === 'development' //devTools будет доступно только в процессе разработки (как и надо)
// })

// export default store;