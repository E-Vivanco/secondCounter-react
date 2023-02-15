import React from 'react';
import '../styles/contador.css';
import PropTypes from 'prop-types';


const SecondsCounter = () => {
  return (
    <div className="text-center w-100 ">
			<h1>Counter</h1>
			<div className="text-center w-50 container d-flex contador_reloj">
			<div className="calendario">
			<i class="fa-solid fa-clock fx-2"></i>
			</div>
			<div>uno</div>
			<div>dos</div>
			<div>tres</div>
			<div>cuatro</div>
			</div>
		</div>
  )
}

Contador.prototype={
	uno: PropTypes.number,
	dos: PropTypes.number,
	tres: PropTypes.number,
	cuatro: PropTypes.number,
}

export default SecondsCounter