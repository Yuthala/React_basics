import React from 'react';
import { useState } from 'react';
import MyButton from './button/MyButton';
import MyInput from './input/MyInput';

//передаем в props функцию create из App.js
const PostForm = ({create}) => {

  //создаем состояние поста. Пост - это объект, свойствами которого являются поля формы. Начальное значение установим как объект с пустыми строками
  const [post, setPost] = useState ({title: '', body: ''});


  const addNewPost = (e) => {
    e.preventDefault();
	const newPost = {
		...post, id: Date.now()
	}
    // console.log(bodyInputRef.current.value);
    // setPosts([...posts, {...post, id: Date.now()}]);//отрисовываем все посты что уже есть + новый пост. Для нового поста создаем новый объект в массиве, выводим туда информацию из поста ...post и добавляем id
    create(newPost);
	setPost({title: '', body: ''})//очищаем форму
  }

  // const bodyInputRef = useRef();

	return ( 
			<form>
			{/* //управляемый компонент */}
				<MyInput 
					value={post.title}
					onChange={e => setPost({...post, title: e.target.value})}
					type="text" 
					placeholder='название поста' 
				/>
				{/* //неуправляемый компонент */}
				{/* <MyInput 
					ref={bodyInputRef}
					type="text" 
					placeholder='описание поста' 
				/> */}
				<MyInput
					value={post.body}
					onChange={e => setPost({...post, body: e.target.value})}
					type="text"
					placeholder="описание поста"
				/>
				<MyButton onClick={addNewPost} type="submit">Создать пост</MyButton>
			</form>
	 );
}
 
export default PostForm;