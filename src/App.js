import React from 'react';
import { useState, useRef } from 'react';
import './styles/App.css';
//import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
//import Counter from './components/Counter';
//import ClassCounter from './components/ClassCounter';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])


  //создаем состояние поста. Пост - это объект, свойствами которого являются поля формы. Начальное значение установим как объект с пустыми строками
  const [post, setPost] = useState ({title: '', body: ''});
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // console.log(bodyInputRef.current.value);
    setPosts([...posts, {...post, id: Date.now()}]);//отрисовываем все посты что уже есть и новый пост. Для нового поста создаем новый объект в массиве, выводим туда информацию из поста ...post и добавляем id
    setPost({title: '', body: ''})//очищаем форму
  }


  return (
    <div className="App">
      {/* <Counter /> //Counter.jsx*/}
      {/* <ClassCounter /> //ClassCounter.jsx */}
      {/* //передаем в props объект post  */}
      {/* <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/> */}

    {/* //форма добавления поста */}
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
    <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
