import {useEffect, useReducer, useState} from 'react'
import reactLogo from './assets/react.svg'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {v4 as uuidv4} from "uuid";
import './App.css'


function App() {
    const [todo, setTodo] = useState(() =>{
        const localValue = JSON.parse(localStorage.getItem('Todo'))
        return localValue ? localValue : []
    })
    const [input, setInput] = useState('')
    const [isEditing, setIsEditing] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd()
    }
    const handleAdd = () => {
        if (!input.trim()) return
        if(isEditing){
            const newTodo = todo.map((item) =>
                item.id === isEditing ? {...item,text:input,} : item )
            setTodo(newTodo)
            setIsEditing(null)
        }else{
            setTodo([...todo, {id: uuidv4(), text: input, completed: false}])
            setInput('')
        }
        setInput('')
    }
    const handleDelete = (id) => {
        const newTodo = todo.filter((item) => item.id !== id)
        setTodo(newTodo)
    }
    const handleEdit = (item) =>{
        setInput(item.text)
        setIsEditing(item.id)
    }
    const handleToggle=(id)=>{
        const newTodo = todo.map((item) =>
            item.id === id ? {...item,completed: !item.completed} : item)
        setTodo(newTodo)
    }
    useEffect(() => {
        localStorage.setItem('Todo',JSON.stringify(todo))
    }, [todo]);

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto text mt-10">
                <h1 className="text-center text-white text-xl font-semibold mb-4">Catatan</h1>
                <div className="flex items-center gap-4">
                    <input value={input} onChange={(e) => setInput(e.target.value)}
                           className="py-3 px-5 text-black w-full outline-none rounded-lg" type="text"
                           placeholder="Enter your todo"/>
                    {isEditing === null ? (
                        <span onClick={handleAdd}
                              className="py-3 px-5 bg-blue-500 cursor-pointer text-white font-semibold rounded-md">Tambah</span>
                    ): (
                        <span onClick={handleAdd}
                              className="py-3 px-5 bg-blue-500 cursor-pointer text-white font-semibold rounded-md">Edit</span>
                    ) }
                </div>
                <ul className="flex flex-col gap-4 mt-10">
                    {todo.length <= 0 && (
                        <div className="text-xl font-semibold text-red-200 text-center">Tidak ada catatan...</div>
                    )}
                    {todo.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center p-3 rounded-md  hover:bg-black hover:bg-opacity-50 transition-all justify-between">
                            <div className="flex items-center gap-3">
                                <input checked={item.completed} onChange={() => handleToggle(item.id)} className="w-5 h-5" type="checkbox"/>
                                <span className={`text-white ${item.completed ? 'line-through' : ''}`}>{item.text}</span>
                            </div>
                            <div className="flex items-center gap-3">
                     <span
                         onClick={() => handleEdit(item)}
                         className="w-6 h-6 cursor-pointer flex items-center justify-center rounded-full bg-blue-200 text-blue-500">
                         <AiFillEdit/>
                     </span>
                                <span
                                    onClick={() => handleDelete(item.id)}
                                    className="w-6 h-6 cursor-pointer flex items-center justify-center rounded-full bg-red-200 text-red-500">
                         <AiFillDelete/>
                     </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </form>
        </>
    )
}

export default App
