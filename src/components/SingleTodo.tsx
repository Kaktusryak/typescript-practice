import React,{useState,useRef, useEffect} from 'react'
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Todo } from '../model';
import './styles.css'

interface Props{
    item:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo:React.FC<Props> = ({item, todos, setTodos}) => {

    const [edit,setEdit] = useState<boolean>(false)
    const [text,setText] = useState<string>(item.todo)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])

    const handleDone = (id:number)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo, isDone:!todo.isDone}:todo))
    }

    const handleDelete = (id:number)=>{
        setTodos(todos.filter(todo=>todo.id===id?false:true))
    }

    const handleEdit = (e:React.FormEvent,id:number)=>{
        e.preventDefault()
        setTodos(todos.map(todo=>todo.id===id?{...todo,todo:text}:todo))
        setEdit(false)
    }
    

  return (
    <form className='todosSingle' onSubmit={(e)=>handleEdit(e,item.id)}>
        {edit?(<input ref={inputRef} className='singleText' value={text} onChange={(e)=>setText(e.target.value)}/>):(item.isDone?(<s className='singleText'>{item.todo}</s>):(<span className='singleText'>{item.todo}</span>))}

        
        
        <div>
              <span className='icon' onClick={() => {
                  if (!edit && !item.isDone) {
                      setEdit(!edit)
                  }
              }
              }>
                <MdModeEditOutline/>
            </span>
            <span className='icon' onClick={()=>handleDelete(item.id)} >
                <MdDelete/>
            </span>
            <span className='icon' onClick={()=>handleDone(item.id)}>
                <MdDone/>
            </span>

        </div>
    </form>
  )
}

export default SingleTodo
