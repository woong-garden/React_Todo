import React from 'react';
import Todo from '../Todo/Todo';

function TodoList({todos, isActive, setTodos }) {
    return (
        <>
            <h4>{isActive === true ? '해야 할 것' : '완료 된 것'}</h4>
            {
                todos.filter((item) => {
                    return item.isDone === !isActive
                })
                .map(item => {
                    
                    return (
                        <Todo key={item.id} item={item} isActive={isActive} setTodos={setTodos}/>
                    )
                })
            }
        </>
    );
}

export default TodoList;