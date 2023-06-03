import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, addIncome } from "../../redux/ducks/TodoReducer";

export default function Contact() {
  const cards = useSelector((state) => state.addContactSlice.value);
  const [filters , setFilters] = useState("All");

  // console.log(cards);
  const dispatch = useDispatch();

  const { handleSubmit, register, reset } = useForm();

  const Submit = (data) => {
    let payload = {
      name: data.name,
      amount: data.amount,
    };

    if (data.amount > 0) {
      dispatch(addIncome(payload));
      reset();
    } else {
      dispatch(addExpense(payload));
      reset();
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-10/12 flex items-start gap-5 justify-center">
        <div className="w-3/12 flex items-start justify-center flex-col gap-5">
          <h1 className="w-full text-left text-[30px]">Wallet</h1>
          <p className="w-full text-center">YOUR BALANCE</p>
          <p className="w-full text-[40px] text-center">{Number(cards
                .filter((data) => data.type === "INCOME")
                .reduce((accumulator, value, index, array) => {
                  return Number(accumulator) + Number(value.amount);
                }, 0)) - Number(cards
                  .filter((data) => data.type === "EXPENSE")
                  .reduce((accumulator, value, index, array) => {
                    return Number(accumulator) + Number(value.amount * -1);
                  }, 0))}</p>
          <div className="w-full flex items-center justify-center  flex-col rounded-lg bg-blue-400 py-5 px-4">
            <p className="text-[20px] font-medium">INCOME</p>
            <p className="text-[20px] font-medium text-green-600">
              {cards
                .filter((data) => data.type === "INCOME")
                .reduce((accumulator, value, index, array) => {
                  return Number(accumulator) + Number(value.amount);
                }, 0)}
            </p>
          </div>
          <div className="w-full flex items-center justify-center  flex-col rounded-lg bg-red-200 py-5 px-4">
            <p className="text-[20px] font-medium">EXPENSE</p>
            <p className="text-[20px] font-medium text-red-600">
            {cards
                .filter((data) => data.type === "EXPENSE")
                .reduce((accumulator, value, index, array) => {
                  return Number(accumulator) + Number(value.amount * -1);
                }, 0)}
            </p>
          </div>

          <p className="w-full text-[25px] text-center border-b border-black">
            Add new Transaction
          </p>
          <form
            onSubmit={handleSubmit(Submit)}
            className="flex gap-5 flex-col items-start justify-center"
          >
            <label className="flex flex-col items-start  justify-center">
              <p>Text</p>
              <input
                className="border border-gray-500 rounded-md p-2"
                name="name"
                {...register("name", { required: true })}
              />
            </label>
            <label className="flex flex-col items-start justify-center">
              <p>Amount</p>
              <span>(negative - expense , positive - income)</span>
              <input
                type="number"
                className="border border-gray-500 rounded-md p-2"
                name="amount"
                {...register("amount", { required: true })}
              />
            </label>
            <button
              type="submit"
              className="px-20 py-2 rounded-sm bg-violet-800 text-white"
            >
              Add transaction
            </button>
          </form>
        </div>
        <div className="w-6/12 flex mt-20 py-6 gap-5 items-start justify-center  border-t border-black ">
          <div className="flex flex-col ">
            <label className="flex items-center gap-2 text-[18px] ">
              <input type="radio" name="filter" value="All" onChange={e => setFilters(e.target.value)} /> All
            </label>
            <label className="flex items-center gap-2 text-[18px] ">
              <input type="radio" name="filter" value="EXPENSE" onChange={e => setFilters(e.target.value)}  /> Debit
            </label>
            <label className="flex items-center gap-2 text-[18px] ">
              <input type="radio" name="filter" value="INCOME" onChange={e => setFilters(e.target.value)}  /> Credit
            </label>
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-5">
          {cards.filter(data => {
            if(filters === "All"){
              return data
            }else if(filters === "EXPENSE"){
              return data.type === 'EXPENSE'
            }else if(filters === "INCOME"){
              return data.type === 'INCOME'
            }else{
              return data
            }
          }).map((data) => (
            <div
              className={`w-full border rounded-md bg-white px-2 py-2 flex items-center flex-row justify-between border-r-4  ${
                data.type === "EXPENSE" ? "border-red-700" : "border-green-700"
              }`}
            >
              <div>
                <p>{data.name}</p>
                <p>{data.id}</p>
              </div>
              <p>{data.type === 'EXPENSE' ? data.amount * -1 : data.amount}</p>
            </div>
          ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
