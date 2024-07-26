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

    //функция ожидат на вход новый созданный пост. через изменение состояния получаем список существующих постов ...posts + новый пост
  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
  }

  //получаем post из дочернего компонента. Удаляем тот пост, который передали аргументом
  const removePost = (post) => {
    //удаляем post, переданный в аргументы. С помощью filter получаем новый массив без этого поста
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* <Counter /> //Counter.jsx*/}
      {/* <ClassCounter /> //ClassCounter.jsx */}
      {/* //передаем в props объект post  */}
      {/* <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/> */}

    <PostForm create={createPost}/>
    {/* //передаем функцию remove={removePost} как props в дочерний компонент PostList.  */}
    <PostList remove={removePost} posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
