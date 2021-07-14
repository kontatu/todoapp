import React from "react";
import Item from './Item';

const List = ({ todos, deletTodo }) => {
    //todo:　データの数だけ(todosの個数)の分だけコンポーネントを増やす
    // データの数：　todosの配列にある個数をカウントする(.mapで省略できる)
    // itemを作る：　個数だけループさせる 
    // itemを作る：　１つづつ作っていく

    return (
        <ul>
            {/* <Item content={todos[0].content} />
            <Item content={todos[1].content} />
            <Item content={todos[2].content} /> */}

            {
                todos.map((todo) => {
                    return (
                        <Item
                            content={todo.content}
                            key={todo.id}
                            id={todo.id}
                            deletTodo={deletTodo}
                        />
                        // ここでのtodoは１つずつ処理しているから[]がいらない
                    )
                })
            }
        </ul>
    )
}

export default List