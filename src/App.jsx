import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(50)

  const elements = []
  for (let index = 0; index <= count; index++) {
    elements.push(<div style={{ margin: '19px' }} key={index}> {index} </div>)
  }

  useEffect(() => {

    function onScroll() {
      // console.log(window.document.body.offsetHeight)
      // console.log(window.scrollY)
      if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 120) {

        setCount(count + 50)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [count])

  return (
    <div>

      {elements}

    </div>
  )
}

export default App
