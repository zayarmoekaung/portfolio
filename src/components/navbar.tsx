import Image from 'next/image'
import styles from '../styleSheets/navbar.module.css'

export default function Navbar() {
   
    
     
           
    return (
        <nav>
        <div className={styles.logo}>
            <Image 
             src='/img/zayar.png'
             width={300}
             height={300}
             alt='zayar'
             className={styles.hero_img}
             />
             
        
           
        </div>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><button class="login-button" href="#">Login</button></li>
            <li><button class="join-button" href="#">Join</button></li>
        </ul>
    </nav>
    )
}