import { useState } from "react";
import style from './Contact.module.scss'; 

function Contact() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null); 


    const handleInputChange = (e) => {
        setInput(e.target.value);
    };


    const todolistfunc = () => {
        if (input.trim()) { 
            setTodos((prevTodos) => [...prevTodos, input]);
            setInput(''); 
        }
    };
    const handleClick = (e) => {
        if (e.target.classList.contains(style.selected)) {
            e.target.classList.remove(style.selected);
        } else {
            e.target.classList.add(style.selected);
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            todolistfunc(); 
        }
    };

    let time = new Date();

    return (
        <div className={style.MainToDo}>
            <h1>Contact Page</h1>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={todolistfunc}>Add</button>
            </div>
            <div className={style.ToDoDiv}>
                <ul>
                    {todos.map((item, index) => (
                        <li
                            key={index}
                            onClick={handleClick}
                            // className={selectedIndex === index ? style.selected : ''}
                        >
                            <p>{item}</p>
                            <span>{time.toDateString()}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Contact;
