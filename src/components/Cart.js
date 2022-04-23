import React from 'react'
import  Spagereducer  from '../redux/Reducers/reducer'
import { useDispatch, useSelector } from 'react-redux'


function Cart() {

    const dispatch = useDispatch();

    const cart = useSelector((state)=>({
        
        cart:state.Spagereducer.Spage

    }))

    console.log(cart)



  return (
    <div>

    </div>
  )
}

export default Cart