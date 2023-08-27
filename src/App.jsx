import './App.css'
import { useState } from 'react'

import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='division'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 5 }}
        transition={{ duration: 2 }}>
        <p>HELLO</p>
      </motion.div>
      <motion.div
        transition={{ duration: 2 }}
        style={{ backgroundColor: 'orange', width: '50%' }}
        animate={{
          scale: [1, 2.2, 2.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}>
        <p>HI</p>
      </motion.div>
      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
        APPEAR DISAPPEAR
      </motion.nav>
      <button onClick={() => setIsOpen(isOpen => !isOpen)}>Toggle Click</button>
    </div>
  )
}

export default App
