import React from 'react'
import styles from './Home.module.css'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'

const Home = () => {
  return (
    <div className={styles}>
      <HookUseState />
      <hr />
      <HookUseReducer />
    </div>
  )
}

export default Home
