import './App.css'

import { motion } from 'framer-motion'

function App() {
  return (
    <div className='division'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 5 }}
        transition={{ duration: 2 }}>
        <p>HELLO</p>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}>
        <p>HI</p>
      </motion.div>
    </div>
  )
}

export default App
