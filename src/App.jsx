import './App.css'
import { useState } from 'react'

import { motion, useMotionValue, useTransform } from 'framer-motion'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const x = useMotionValue(0)
  const background = useTransform(x, [-100, 0, 100], ['#ff008c', '#7700ff', 'rgb(230, 255, 0)'])

  return (
    <div className='division'>
      <motion.div
        style={{ backgroundColor: 'green' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 3 }}
        transition={{ duration: 2 }}>
        ANIMATION
      </motion.div>
      <motion.div
        transition={{ duration: 2 }}
        style={{ backgroundColor: 'orange', padding: '10px' }}
        animate={{
          scale: [1, 2.2, 2.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['5px', '20%', '30%', '30%', '5px'],
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
      <div style={{ backgroundColor: 'yellow', padding: '50px', borderRadius: '5px' }}>
        <motion.div
          style={{
            backgroundColor: 'orange',
            borderRadius: '5px',
          }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}>
          DRAG COMPONENT
        </motion.div>
      </div>
      <motion.div style={{ background, padding: '20px', borderRadius: '5px' }}>
        <motion.div drag='x' dragConstraints={{ left: 0, right: 0 }} style={{ x }}>
          MotionValues
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Scroll-triggered animations
      </motion.div>
    </div>
  )
}

export default App
