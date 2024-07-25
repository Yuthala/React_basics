import React from 'react'
//импортируем стили как объект
import classes from './MyButton.module.css';

//деструктурируем props children, остальные props оставляем как есть
const MyButton = ({children, ...props}) => {
	return (
		// передаем кнопке весть объект props, чтобы получить атрибуты кнопки из App.js (например disabled)
		<button {...props} className={classes.myBtn}>
			{/* //передаем props.children, чтобы в кнопке отразился текст кнопки из App.js */}
			{children}
		</button>
	 );
}
 
export default MyButton;