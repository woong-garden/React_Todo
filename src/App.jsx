
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';



function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Header>헤더입니다.</Header>
      <main style={{
        padding: "20px",
        backgroundColor: "deepskyblue",
      }}>

        {/*인풋을 만들어 입력하는 부분*/}
        <Input setTodos={setTodos}/>

        {/*todolist를 출력하는 부분*/}
        <TodoList isActive={true} todos={todos} setTodos={setTodos}/>
        <TodoList isActive={false} todos={todos} setTodos={setTodos}/>
      </main>
      <footer>푸터입니다</footer>
    </div>
  );
}

export default App;

const initialState = [
  {
    title: '제목 1',
    contents: '내용 1',
    isDone: false,
    id: uuidv4(),
  },
  {
    title: '제목 2',
    contents: '내용 2',
    isDone: true,
    id: uuidv4(),
  },
  {
    title: '제목 3',
    contents: '내용 3',
    isDone: false,
    id: uuidv4(),
  },
]