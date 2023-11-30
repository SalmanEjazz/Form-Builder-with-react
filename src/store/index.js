

import { configureStore, createSlice }from  "@reduxjs/toolkit";

const reduxStates = createSlice({
  name: 'Store for States',
  initialState: {
    signatureImg:null,
    signatureModal: false,
    displayModalState:false,

    apqpQuestions:{

    },
  },
  reducers: {
    changeSignature: (state, action) =>{
      state.signatureImg = action.payload;
     
    },
    displaySignature: (state) =>{
      state.signatureModal = !state.signatureModal;
     
    },
    displayModal:(state, action)=>{
      state.displayModalState = action.payload;
    },
    updateApqpQuestions:(state, action)=>{
      state.apqpQuestions =action.payload;
    },
    
  },
});

export const actions = reduxStates.actions;

const store = configureStore({
    reducer: reduxStates.reducer,
});

export default store;
