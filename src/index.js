import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Main from './components/main'
import './style/style.scss'

const MainPage = () => {
  return (
    <>
    <Header />
    <Main />
    </>
  )
}

ReactDOM.render(<MainPage />, document.getElementById('root'))