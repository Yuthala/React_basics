import React from 'react';
//импортируем стили как объект
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
	return ( 
		//все, что будет попадать в MyInput будет попадать и в поле input
		<input ref={ref} className={classes.myInput} {...props}/>
	 );
});
 
export default MyInput;
