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
        style={{ backgroundColor: 'green' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 5 }}
        transition={{ duration: 2 }}>
        ANIMATION
      </motion.div>
      <motion.div
        transition={{ duration: 2 }}
        style={{ backgroundColor: 'orange', padding: '10px' }}
        animate={{
          scale: [1, 2.2, 2.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['5px', '20%', '50%', '50%', '5px'],
        }}>
        KEYFRAMES
      </motion.div>
      <div>
        <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
          VARIANTS
        </motion.nav>
        <motion.button
          style={{ backgroundColor: 'orange' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(isOpen => !isOpen)}>
          Toggle Click
        </motion.button>
      </div>
      <motion.button
        style={{ backgroundColor: 'orange' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        GESTURE ANIMATIONS
      </motion.button>
    </div>
  )
}

export default App
