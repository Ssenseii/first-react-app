import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Title from './components/title'
import Hero from './components/hero'
import './style/style.scss'

const MainPage = () => {
  return (
    <>
    <Header />
    <Title title="Marketing"/>

    <Hero />
    </>
  )
}

ReactDOM.render(<MainPage />, document.getElementById('root'))