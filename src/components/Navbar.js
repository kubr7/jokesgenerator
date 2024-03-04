import React from 'react'

function Navbar() {
     return (
          <div className='container'>
               <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="navbar-content m-auto">
                         <a className="navbar-brand" href="/">
                              <img src="logo512.png" alt="Logo" width="64" height="64"/>
                         </a>
                    </div>
               </nav>
          </div>
     )
}

export default Navbar
