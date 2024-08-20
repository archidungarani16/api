import React,{useEffect, useState} from 'react'

const Counter = () => {
const [count, setCount]=useState(0)
const [str, setStr] = useState('hii')
    const Increement = () => {
        setCount(count+1)
    }
    const Decreement = () => {
        setCount(count-1)
    }


  return (
    <>
    <div className='count'>
     <h1>{count}</h1>
            
            <button className='btn1' onClick={() =>{
                Increement()
            }}>Increement</button>


            <button className='btn2' onClick={() =>{
                Decreement()
            }}>Decreement</button>
            
            </div>
    </>
  )
}

export default Counter