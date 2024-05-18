import './App.css'
import Form from './components/Form'
import {Header,  TodoText } from './components/Header'

function App(){
  return (
      <div>
        <Header />
        <TodoText/>
        <Form />
        <h2 className="footer">Made with ❤️ and ☕ by <a href = "http://www.github.com/Maniii97">‎ Mani</a></h2>
      </div>
  )
}

export default App
