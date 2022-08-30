import React from 'react'


const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className="header__logo">Logo</div>
        <nav className="header__nav">
          <div className="header__nav-element">Products</div>
          <div className="header__nav-element">Docs</div>
          <div className="header__nav-element">Blog</div>
          <div className="header__nav-element">Other</div>
        </nav>
      </div>
    </header>
  )
}

export default Header