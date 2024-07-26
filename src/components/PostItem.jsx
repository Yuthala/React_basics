import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
	return ( 
	<div className="post">
        <div className="post__content">
			{/* //"достаем" из props заголовок - обращаемся к объекту props - объекту post и его свойствам */}
          <strong>{props.number}. {props.post.title}</strong>
          <div>
		  	{props.post.body}
          </div>
        </div>

        <div className="post__btns"> 
          {/* //на клик вешаем функцию rermove из props и передаем в параметры текущий пост, который получаем также из props. Удаление поста происходит по id */}
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
    </div>
	);
}
 
export default PostItem;