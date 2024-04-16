import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css';
import { log } from 'console';
import { Todo } from './model';
import TodoList from './components/TodoList';


// let name:string;
// let age:number = 5
// let bool:boolean = false
// let array:string[] = ['hello','world']
// let thisIsTuple:[number,string]
// thisIsTuple = [5,'hello']

// let person:Object;//not recommended due to unknown types of properties

// type Person = {
//   name:string;
//   age?:number;//optional
// }

// let person1:Person={
//   name:'Josh',
//   age:56
// }

// let person2:Person={
//   name:'John'
// }

// let persons:Person[]//array of Persons

// let twoTypes:number | string

// function doSmth(name:string){
//   console.log(name)
// }

// doSmth('Carl')



// let anotherFunction : (name:string)=>void; // void - returns undefined, never - returns nothing

// let thisThing:unknown


// interface Person1  {
//   name:string;
//   age?:number;
// }

// interface Guy extends Person1{
//   job:string;
// }

// type man = Person1 & {//type extended with interfsce
//   weight:number
// }

// type X = {
//   a:string
// }
// interface Y extends X{//interface extended with type
//   b:number
// }
// let T:Y={
//   a:'fadfas',
//   b:5
// }


const App:React.FC=()=> {
  const [todo, setTodo] = useState<string>('')
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo('')
    }

  }

  console.log(todos)
  return (
    <div className="App">
      <span className='heading'>Tasker</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
