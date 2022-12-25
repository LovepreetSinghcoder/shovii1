import React from 'react'
import { Link } from 'react-router-dom'
import './Bottambar.css'

const Bottambar = () => {
  return (
    <div className='bottomContainer'>
        <div className="bottomtitle">
            <h2>Shovii</h2>
        </div>
        {/* <div className="cardline"></div> */}
        <div className="bottomcard">
            <div className="cardd">
            <Link style={{ textDecoration: 'none' }} to='/'><span>Home</span></Link>
            </div>
            <div className="cardd">
            <Link style={{ textDecoration: 'none' }} to='/'><span>Contect US</span> </Link>
            </div>
            <div className="cardd">
            <Link style={{ textDecoration: 'none' }} to='/'><span>About</span></Link>
            </div>
            <div className="cardd">
            <Link style={{ textDecoration: 'none' }} to='/'><span>Creater</span></Link>  
            </div>
          
        </div>
    
    </div>
  )
}

export default Bottambar