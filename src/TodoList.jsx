import { useState } from "react";
import{ v4 as uuidv4} from "uuid";
export default function TodoList(){

    let[todos, setTodos] = useState([{task:"sample",id:uuidv4(),isDone:false}]);
    let [newTodos,setNewTodos] = useState([""]);

    let inputVal = (e)=>{

        setNewTodos(e.target.value);
    };

    let addTask = ()=>{
        setTodos([...todos, {task:newTodos,id:uuidv4(),isDone:false}]);
    };

    let dltTask = (id)=>{
        setTodos((todos)=>
            todos.filter((todo)=> todo.id != id)
        
        );
    };

    let upperCaseToAll = ()=>{
        setTodos((todos) =>
            todos.map((todo)=>(
                {
                    ...todo,task:todo.task.toUpperCase()
                }
            ))
        )
    }

    let upperCaseOne = (id)=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,task:todo.task.toUpperCase()
                    }
                }else{
                    return todo;
                }
            })
        )
    }


    let doneAll = ()=>{
     setTodos((todos)=>
     todos.map((todo)=>{
            
        return {
            ...todo,isDone:true
        }
    }))
    }

    let doneOne = (id)=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,isDone:true
                    }
                }else{
                    return todo;
                }
            })
        )
    }

    return(
        <div style={{height:"100%",width:"100%"}}>
        <div style={{border :"2px solid white", paddingInline:"40px"}}>
        <h1 style={{textDecorationLine:"underline"}}>To do list</h1>
        
        <div style={{display:"flex",justifyContent:"center",gap:"15px" ,marginBottom:"50px"}}>
            <input type="text" placeholder="add todo list..." value = {newTodos} onChange={inputVal} style={{padding:"10px",borderRadius:"5px", borderStyle:"none"}}/>
            <button onClick={addTask}>Add</button>
        </div>
        </div>
        <hr />
        <ul style={{display:"flex", flexDirection:"column" ,alignItems:"start", listStyle:"none"}}>
            {
                todos.map((todo)=>(
                    <li key={todo.id} style={{margin:"10px" , display:"flex",gap:"15px",border :"2px solid white", justifyContent:"center" ,alignItems:"center",paddingInline:"10px"}}>
                        <p style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</p>
                        <button style={{height:"45px",color:"red"}} onClick={()=> dltTask(todo.id)}><i class="ri-delete-bin-fill"></i></button>
                        <button style={{height:"45px"}} onClick={()=>upperCaseOne(todo.id)}>ABC</button>
                        <button style={{height:"45px"}} onClick={()=>doneOne(todo.id)}><i class="ri-check-double-line"></i></button>
                    </li>
                ))
            }
        </ul>
        <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
        <button onClick={upperCaseToAll}>UPPERCASE ALL</button>
        <button style={{color:"green"}} onClick={doneAll}><i class="ri-check-double-line"></i></button>
        </div>
        </div>
    )
    
}