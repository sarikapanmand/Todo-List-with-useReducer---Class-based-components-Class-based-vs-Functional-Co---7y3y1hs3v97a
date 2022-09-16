import React from "react"

const AddTodo = ({ dispatch }) => {

const [text, setText] = useState("");
  return (
    <div className="AddTodo">
      <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
      <button className="AddTodoButton" onClick={() => {add(text); setText("")}}>Add</button>
    </div>
  );
   
}

export { AddTodo }
