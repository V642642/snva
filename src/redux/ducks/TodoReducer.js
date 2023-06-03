import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: [],
}

export const addPaymentSlice = createSlice({
  name: 'addpayment',
  initialState ,
  reducers: {
    addIncome: (state, action) => {
      let date = new Date()
      let id =  `${date.getUTCFullYear() }-${date.getUTCMonth() + 1 }-${date.getUTCDate()}`
      const data = {id , ...action.payload , type : "INCOME"}
      return {...state , value : [...state.value , data]}
    },
    addExpense: (state, action) => {
      let date = new Date()
      let id =  `${date.getUTCFullYear() }-${date.getUTCMonth() + 1 }-${date.getUTCDate()}`
      const data = {id , ...action.payload , type : "EXPENSE"}
      return {...state , value : [...state.value , data]}
    },
  },
})


export const { addIncome , addExpense } = addPaymentSlice.actions

export default addPaymentSlice.reducer