import { Fragment } from 'react'
import classes from './Header.module.css'
import mealImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header =(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Zak's Cafe</h1>
               <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealImage} alt='Table with Foods' />
            </div>
        </Fragment>
    )
}
export default Header;