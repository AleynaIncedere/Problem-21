import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className='flex justify-center flex-col items-center py-8'>
      <h1 className='text-2xl font-bold pb-4'>🐭</h1>
      <BrowserRouter>
        <nav className='flex justify-center max-w-sm p-4 pb-8 space-x-4'>
          <Link className='underline' to='/'>
            Home
          </Link>
          <Link className='underline' to='/about'>
            About
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<MousePosition />} />
          <Route path='/about' element={<h1>Mouse&apos;unuzu takip edin!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY })
      console.log('Updating state')
    }

    window.addEventListener('pointermove', handleMove)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('Unmounted and event listener removed')
    }
  }, [])

  return (
    <div className='space-y-5'>
      <div>
        X position: <strong>{position.x.toFixed(2)}</strong>
      </div>
      <div>
        Y position: <strong>{position.y.toFixed(2)}</strong>
      </div>
    </div>
  )
}
