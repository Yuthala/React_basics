import React from 'react';

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
          <button>Удалить</button>
        </div>
    </div>
	);
}
 
export default PostItem;