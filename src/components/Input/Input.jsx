import React, { useState } from "react"
import {v4 as uuidv4} from 'uuid';


function Input({setTodos}) {

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleSubmitClick = (event) => {
        event.preventDefault();

        const newTodo = {
            title: title,
            contents: contents,
            isDone: false,
            id: uuidv4(),
        }
        //세팅된 title과 contents를 todos에 넣어주기
        setTodos(prev => {
            console.log(prev)
            return [...prev, newTodo]
        })

    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event) => {
        setContents(event.target.value);
    }

    return(
        <section>
            <form onSubmit={handleSubmitClick}>
                제목: <input name="title" value={title} onChange={handleTitleChange}/>
                내용: <input name="content" value={contents} onChange={handleContentChange}/>
                <button>추가</button>
            </form>
        </section>
    );
}

export default Input