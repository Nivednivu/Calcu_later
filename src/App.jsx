import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
function App() {
   const [display,setdisplay]=useState('')
   const handleclick =(value)=>{
    setdisplay(display + value);
   }
   const clear =()=>{
    setdisplay("")
   }
   const backspace =()=>{
    setdisplay(display.slice(0,-1))
   }
   const calculate =()=>{
    try{
      setdisplay(eval(display).toString())

    }catch(err){
      setdisplay("")
    }
   }
  return (
    <>
    <div>

    <div style={{height:'55vh ',marginLeft:'640px',marginRight:'640px', marginTop:'120px' }}
     className='mm d-flex align-items-center justify-content-center flex-column  border rounded '>
      <p className='dd  '>Calculater</p>
      <div   className='d-flex align-items-center justify-content-center p-2 border rounded flex-column bg-light'>
      <input style={{height:'55px',width:'200px',textAlign:'end'}} className='bg-dark text-white border rounded  ' type="text" disabled value={display} onChange={(e)=>setdisplay(e.target.value)} />
<div className=' mt-3 bg-light'>
  <button style={{backgroundColor:'red',width:'65px'}} className=' btn text-white   me-3' onClick={clear}>AC</button>
  <button style={{backgroundColor:'red'}} className=' btn  text-white ' onClick={backspace}>DEL</button>
  <button className=' btn btn-text-light bg-dark ms-3'onClick={()=>handleclick("/")}>/</button>
</div>
<div className='mt-3 bg-light border'>
  <button className=' btn btn-text-light bg-dark   me-3'onClick={()=>handleclick("7")}>7</button>
  <button className=' btn btn-text-light bg-dark 'onClick={()=>handleclick("8")}>8</button>
  <button className='btn btn-text-light bg-dark ms-3'onClick={()=>handleclick("9")}>9</button>
  <button className='btn btn-text-light bg-dark ms-3'onClick={()=>handleclick("*")}>*</button>
</div>
<div className='mt-3 bg-light'>
  <button className=' btn btn-text-light bg-dark  me-3'onClick={()=>handleclick("4")}>4</button>
  <button className=' btn btn-text-light bg-dark 'onClick={()=>handleclick("5")}>5</button>
  <button className='btn btn-text-light bg-dark ms-3'onClick={()=>handleclick("6")}>6</button>
  <button className='btn btn-text-light bg-dark ms-3'onClick={()=>handleclick("+")}>+</button>
</div>
<div className='mt-3 bg-light'>
  <button className=' btn btn-text-light bg-dark  me-3'onClick={()=>handleclick("1")}>1</button>
  <button className=' btn btn-text-light bg-dark 'onClick={()=>handleclick("2")}>2</button>
  <button className='btn btn-text-light bg-dark ms-3'onClick={()=>handleclick("3")}>3</button>
  <button className='btn btn-text-light bg-dark ms-3'onClick={()=>handleclick("-")}>-</button>
</div>
<div className='mt-3 bg-light'>
  <button style={{marginRight:'30px'}} className=' btn btn-text-light bg-dark  'onClick={()=>handleclick("0")}>0</button>
  <button className='btn btn-text-light bg-dark me-2 'onClick={()=>handleclick(".")}>.</button>
  <button style={{width:"65px"}} className='btn btn-text-light bg-dark ms-3'onClick={calculate}>=</button>
</div>

      </div>
     </div>

    </div>
    </>
  )
}

export default App
