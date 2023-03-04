import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DrawingArea from './views/DrawingArea'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DndProvider backend={HTML5Backend}>
    <main>
      <section><DrawingArea/></section>
    </main>
    </DndProvider>
  )
}

export default App
