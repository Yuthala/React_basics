import React from 'react';
import { useState} from 'react';
// import { useRef} from 'react';
import { useMemo } from 'react';
import './styles/App.css';
//import PostItem from './components/PostItem';
import PostList from './components/PostList';
import PostForm from './components/UI/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
//import Counter from './components/Counter';
//import ClassCounter from './components/ClassCounter';

function App() {
  const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'Bdsfgg', body: 'ghjsdgfs'},
		{id: 3, title: 'Htyastuays', body: 'zifsjhekcjs'}
		])
    //состояние select
  const [selectedSort, setSelectedSort] = useState('');

  //состояние инпута Поиск
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[setSelectedSort].localeCompare(b[selectedSort]))
    } return posts;
  }, [selectedSort, posts])

    //функция ожидат на вход новый созданный пост. через изменение состояния получаем список существующих постов ...posts + новый пост
  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
  }

  //получаем post из дочернего компонента. Удаляем тот пост, который передали аргументом
  const removePost = (post) => {
    //удаляем post, переданный в аргументы. С помощью filter получаем новый массив без этого поста
    setPosts(posts.filter(p => p.id !== post.id))
  }
  //функция сортировки массива. Sort - это выбранный механизм сортировки: по названию полей title или body
  const sortPosts = (sort) => {
    //перезаписываем состояние select-а
    setSelectedSort(sort);
    //передаем в setPosts отсортированный массив иммутабельно (копию массива)
    //функция sort принимает колбэк, который аргументами принимает 2 аргумента массива - a и b
    //для сравнения строк используем функцию localeCompare. Сравниваем поле из объекта a с полем из объекта b
    //на основании этого сравнения сортируется массив
    // setPosts()
  }

  return (
    <div className="App">
      {/* <Counter /> //Counter.jsx*/}
      {/* <ClassCounter /> //ClassCounter.jsx */}
      {/* //передаем в props объект post  */}
      {/* <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/> */}

    <PostForm create={createPost}/>

    {/* //сортировка постов */}
    <hr style={{margin: '15px 0'}}/>
    <div>
      {/* //поиск */}
      <MyInput
        placeholder="Поиск"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {/* //передаем значения options в компонент MySelect через props */}
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        // Массив опций
        options={[
          {value: 'title', name: 'По названию'},          
          {value: 'body', name: 'По описанию'},          

        ]}
      />
    </div>

    {/* //условный рендер. Проверяем, что длина массива posts не равна 0, т.е. какие-то посты есть. И если равна 0, выводим пользователю "Посты не найдены"
    //передаем функцию remove={removePost} как props в дочерний компонент PostList. */}
    {posts.length
      ? <PostList remove={removePost} posts={sortedPosts} title="Посты по JS" />
      : <h3 style={{textAlign: 'center'}}>Посты не найдены</h3>
    }
    </div>
  );
}

export default App;
