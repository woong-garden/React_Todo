import React from 'react';

function Todo({ item, isActive, setTodos  }) {

    //삭제버튼 눌렸을 경우
    const handleDeleteButtonClick = () => {
        //t.id와 같지 않은 애들만 리턴
        setTodos(prev => prev.filter(t => t.id !== item.id))
    };

    const handleSwitchButtonClick = () => {
        //prev에는 현재 상태의 state가 들어있는 것
        setTodos(prev => prev.map((t) => {
            if(t.id === item.id){
                //구조분해할당으로 isDone에 있는 바뀔값만 바꿔줌
                return {...t, isDone: !t.isDone};
            }else{
                return t;
            }
        }))
    };
    return (
        <div style={{
            border: '1px solid black',
            marginBottom:'10px'
        }}
        key={item.id}
        >
            <h5>{item.title}</h5>
            <p>{item.contents}</p>
            <button onClick={handleSwitchButtonClick}>{isActive ? '완료':'취소'}</button>
            <button onClick={handleDeleteButtonClick}>삭제</button>
        </div>
    );
}

export default Todo;