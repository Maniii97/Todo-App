interface GoalsProps {
    title: string,
    description: string
    deleteGoals: (index : number) => void
    index : number
}

const Goals : React.FC<GoalsProps> = ({title , description , deleteGoals , index}) => {
  return (
    <div className="Goals">
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button onClick ={()=> deleteGoals(index)}>-</button>
    </div>
  )
}

export default Goals