import React from 'react';
import ReactDOM  from 'react-dom/client';
import PropTypes from 'prop-types';
import './index.css';

const clickHandler =(e)=>{
  if(count >= 30 ){
    count= 0
    
    console.log("activado clickhandler + 30",e)
  }
 
}


const SecondsCounter = (props) => {
  return (
    <div className="text-center w-100 ">
			<h1>Reloj-Counter</h1>
			<div className="text-center w-50 container d-flex contador_reloj">
			<div className="calendario">
			<i className="fa-solid fa-clock fx-2"></i>
			</div>
			<div className='digcuatro'>{props.cuatro %10}</div>
			<div className='digtres'>{props.tres %10}</div>
			<div className='digdos'>{props.dos %10}</div>
			<div className='diguno'>{props.uno %10}</div>
			</div>
      <button className='btn btn-secondary mt-2' onClick={props.clickH}> Reset +30</button>

		</div>
  )
}

SecondsCounter.prototype={
  cuatro: PropTypes.number,
  tres: PropTypes.number,
  dos:PropTypes.number,
  uno:PropTypes.number,
  clickH: PropTypes.onClick,
}

let count=0

setInterval(function() {
  const digcuatro= Math.floor(count/1000)
  const digtres= Math.floor(count/100)
  const digdos= Math.floor(count/10)
  const diguno= Math.floor(count/1)
  console.log(digcuatro,digtres,digdos,diguno)
  count++


  
ReactDOM.createRoot(document.querySelector("#root")).render(
<>
<SecondsCounter 
  uno={diguno}
   dos={digdos} 
   tres={digtres} 
   cuatro={digcuatro}
    clickH={clickHandler}
     count={count}/>
     </>
     )},1000)
