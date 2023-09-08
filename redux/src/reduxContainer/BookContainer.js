import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {purchase_book,sells_book} from './BookAction'

function BookContainer() {
    const dispatch=useDispatch()
    const noOfBook=useSelector(store=>store.NumberOfBooks)
  return (
    <>
     <div>BookContainer</div>
     <h1>No Of Books{noOfBook}</h1>
     <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button>
     <button onClick={()=>{dispatch(sells_book())}}>Sell Book</button>

    </>
  )
}

export default BookContainer