import React from 'react';
import { useState, useRef } from 'react';
import './styles/App.css';
//import PostItem from './components/PostItem';
import PostList from './components/PostList';
import PostForm from './components/UI/PostForm';
//import Counter from './components/Counter';
//import ClassCounter from './components/ClassCounter';

function App() {
  const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description'},
		{id: 3, title: 'JavaScript 3', body: 'Description'}
		])

    //функция ожидат на вход новый созданный пост
  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      {/* <Counter /> //Counter.jsx*/}
      {/* <ClassCounter /> //ClassCounter.jsx */}
      {/* //передаем в props объект post  */}
      {/* <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/> */}

    <PostForm create={createPost}/>
    <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
