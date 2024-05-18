import { useEffect, useState } from 'react'
import Goals from './Goals'

const Form = () => {
    const initialGoals = localStorage.getItem("goals")
    ? JSON.parse(localStorage.getItem("goals") as string) : []

    const [goals,setGoals] = useState<{ title: string, description: string }[]>(initialGoals)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const submitHandler = (e: { preventDefault: () => void }) => {
        e.preventDefault()     // Prevents the page from refreshing
        setGoals([...goals,
            {
                title,
                description
            }
        ])
        setTitle("")
        setDescription("")
    }
    const deleteGoals = (index : number) => {
        const filteredGoals = goals.filter((_item,i)=> i !== index)
        setGoals(filteredGoals)
    }

    useEffect(()=>{
        localStorage.setItem("goals",JSON.stringify(goals))
    },[goals])

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <input type="text" 
                placeholder="Enter the title of your Goal" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Enter the description of your Goal"
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}
                />
                <button type="submit">Add Goal</button>
            </form>
            {goals.map((item,index)=>(
                <Goals 
                key={index} 
                title = {item.title} 
                description={item.description}
                deleteGoals={deleteGoals}
                index={index}
                 />
            ))}
        </div>
    )
}

export default Form