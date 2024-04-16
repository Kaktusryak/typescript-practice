import React, { useRef } from 'react'
import './styles.css'

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) => void
}


// const InputField = ({todo,setTodo}:Props) => {

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form onSubmit={(e)=>{handleAdd(e)
                            inputRef.current?.blur()
                         }
                   } 
          className='input'>
        <input ref={inputRef} type='input' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter a task' className='inputBox'/>
        <button className='submit' type='submit' >Go</button>
    </form>
  )
}

export default InputField
