import React, { useState } from "react"
import {v4 as uuidv4} from 'uuid';


function Input({setTodos}) {

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleSubmitClick = (event) => {
    
        //form테그 새로고침 방지
        event.preventDefault();

        if (!title){
            alert('제목을 입려해주세요')
            
            return document.getElementById('title').focus();
        }

        if (!contents){
            alert('내용을 입려해주세요')
            return document.getElementById('contents').focus();
        }


        //newTodo 작성
        const newTodo = {
            title: title,
            contents: contents,
            isDone: false,
            id: uuidv4(),
        }
        //세팅된 title과 contents를 todos에 넣어주기
        setTodos(prev => {
            return [...prev, newTodo]
        })

        //input값 초기화
        setTitle('');
        setContents('');

    };

    //onChange때문에 input안의 값이 변경될 때 실행
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event) => {
        setContents(event.target.value);
    }

    return(
        <section>
            <form onSubmit={handleSubmitClick}>
                제목: <input id="title" value={title} onChange={handleTitleChange}/>
                내용: <input id="contents" value={contents} onChange={handleContentChange}/>
                <button>추가</button>
            </form>
        </section>
    );
}

export default Input