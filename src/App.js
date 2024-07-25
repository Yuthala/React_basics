import React from 'react';
import { useState } from 'react';
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

  // const [posts2, setPosts2] = useState([
  //   {id: 1, title: 'Python', body: 'Description'},
  //   {id: 2, title: 'Python 2', body: 'Description'},
  //   {id: 3, title: 'Python 3', body: 'Description'}
  // ])


  return (
    <div className="App">
      {/* <Counter /> //Counter.jsx*/}
      {/* <ClassCounter /> //ClassCounter.jsx */}
      {/* //передаем в props объект post  */}
      {/* <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/> */}

    {/* //форма добавления поста */}
    <form>
      <MyInput type="text" placeholder='название поста' />
      <MyInput type="text" placeholder='описание поста' />
      <MyButton>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Список постов 1"/>
    {/* <PostList posts={posts2} title="Список постов 2"/> */}
    </div>
  );
}

export default App;
