import { Link } from 'react-router-dom'
export default function Nav(){
    let clicked = false;
    const showLinks = () => {
        if (clicked){
            document.querySelector('.hamburger-links').style.display = 'none'
            clicked=false
        } else {
            document.querySelector('.hamburger-links').style.display = 'block'
            clicked=true
        }
    }
    return(
        <div>
            <div className='navbar'>
                <Link to='/' className='logo-section'>
                    <img className='logo' src="src/images/logo.png" alt="" />
                    <h2 className='logo-name'>Jeremy LeMenager</h2>
                </Link>
                <div className='links'>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/projects'>Portfolio</Link>
                    <a className='link' href='https://docs.google.com/document/d/e/2PACX-1vTKYJYO-ZuwJqDUSRfSsH9Mm2ABtkMNcaoi6RPDCFHc0kp4cOXg4veHj9xxDJBOT7EOtD4KFK9O4VcM/pub' target='_blank'>Resume</a>
                    <Link className='link' to='/contact'>Contact</Link>
                </div>
                <div id="hamburgerMenu" onClick={showLinks}>
                    <div class="hamburgerBar" id="hamBar1"></div>
                    <div class="hamburgerBar" id="hamBar2"></div>
                    <div class="hamburgerBar" id="hamBar3"></div>
                </div>
            </div>
            <div className='hamburger-links'>
                <Link className='hamburger-link' to='/about' onClick={showLinks}>About</Link>
                <Link className='hamburger-link' to='/projects' onClick={showLinks}>Portfolio</Link>
                <a className='hamburger-link' href='https://docs.google.com/document/d/e/2PACX-1vTKYJYO-ZuwJqDUSRfSsH9Mm2ABtkMNcaoi6RPDCFHc0kp4cOXg4veHj9xxDJBOT7EOtD4KFK9O4VcM/pub' target='_blank'>Resume</a>
                <Link className='hamburger-link' to='/contact' onClick={showLinks}>Contact</Link>
            </div>
        </div>
    )
}