import React from 'React'
import * as heroStyles from "./hero.module.css"
import { navigate } from "gatsby"

const header = () => {
    return (
     <header className={heroStyles.hero}>
        <div>

        </div>
        <div className={heroStyles.heroContainer}>
         <div className={heroStyles.heroInfo}>
            <h1>Elise Jones</h1>
            <p>Cybersecurity and Information Design</p>
            <button className='heroButton' onClick={()=>{navigate("/about")}}>How We Can Help</button>
         </div>
        </div>
     </header>  
    )
}
export default header