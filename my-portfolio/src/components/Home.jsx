import { useEffect, useState } from 'react'
import computerImage from '../images/computer-image-2.png'
import ecotone from '../images/ecotone.png'
import styleswap from '../images/styleswap.png'
import clearEar from '../images/clearEar.png'
import libationStation from '../images/libation-station.png'

export default function Home(){

    let clicked = false;
    const handleClick1 = () => {
        if (clicked){
            document.querySelector('.home-project-onclick1').style.display = 'none'
            document.querySelector('.ecotone-photo').style.display = 'block'
            clicked = false
        } else {
            document.querySelector('.home-project-onclick1').style.display = 'block'
            document.querySelector('.ecotone-photo').style.display = 'none'
            clicked = true
        }
    }
    const handleClick2 = () => {
        if (clicked){
            document.querySelector('.home-project-onclick2').style.display = 'none'
            document.querySelector('.styleswap-photo').style.display = 'block'
            clicked = false
        } else {
            document.querySelector('.home-project-onclick2').style.display = 'block'
            document.querySelector('.styleswap-photo').style.display = 'none'
            clicked = true
        }
    }
    const handleClick3 = () => {
        if (clicked){
            document.querySelector('.home-project-onclick3').style.display = 'none'
            document.querySelector('.clearear-photo').style.display = 'block'
            clicked = false
        } else {
            document.querySelector('.home-project-onclick3').style.display = 'block'
            document.querySelector('.clearear-photo').style.display = 'none'
            clicked = true
        }
    }
    const handleClick4 = () => {
        if (clicked){
            document.querySelector('.home-project-onclick4').style.display = 'none'
            document.querySelector('.libationstation-photo').style.display = 'block'
            clicked = false
        } else {
            document.querySelector('.home-project-onclick4').style.display = 'block'
            document.querySelector('.libationstation-photo').style.display = 'none'
            clicked = true
        }
    }
    
    return(
        <main>
            <div className='hero'>
                <div>
                <h1 className='frontpage-header'>I'm Jeremy LeMenager, a developer.</h1>
                {/* <h2 className='frontpage-subheader'>Welcome to my page!</h2> */}
                </div>
                <div className='hero-image-section'>
                    {/* <div className='box2 box'></div>
                    <div className='box3 box'></div>
                    <div className='box4 box'></div> */}
                    <img className='hero-image' src={computerImage} alt="animated computer" />
                </div>
                {/* <img src="src/images/hshot6.jpg" alt="personal-photo" /> */}
            </div>
            <div className='project-section' id='portfolio'>
                <h1 className='frontpage-header project-header'>Feel free to check out my projects:</h1>
                <div className='projects'>
                    <div className='project'>
                        <a href="https://ecotone-store.netlify.app/" target='_blank'><img className='project-photo ecotone-photo' src={ecotone} alt="" /></a>
                        <div className='project-popup'>
                            <div className='project-button-and-name'>
                                <span className='popup-button' onClick={handleClick1}>^</span>
                                <div className='project-name'>Ecotone</div>
                            </div>
                            <span className='project-summary'>An affiliate marketplace of sustainably and ethically made clothing</span>
                        </div>
                        <div className='home-project-onclick1'>
                            <p className='project-info-line'>Designed and developed a full-stack application that is connected via Express.js and Node.js</p> 
                            <p className='project-info-line'>Developed an API using MongoDB and Mongoose</p>
                            <p className='project-info-line'>Built a search bar that assesses varying keywords and displays relevant products to those keywords using vanilla Javascript and regular expressions</p>
                            <p className='project-info-line'>Integrated a chart of brand ESG scores on each product page using Chart.js</p>
                            <p className='project-info-line'>Added multiple dropdowns and a modal into the site experience </p>
                            <p><strong>Languages:</strong> Javascript, CSS, HTML</p>
                            <p><strong>Frameworks:</strong> Mongoose, Express, Chart.js</p>
                            <p><strong>Database:</strong> MongoDB</p>
                        </div>
                    </div>
                    
                    <div className='project'>
                    <a href="https://styleswap.netlify.app/" target='_blank'><img className='project-photo styleswap-photo' src={styleswap} alt="" /></a>
                        <div className='project-popup'>
                            <div className='project-button-and-name'>
                                <span className='popup-button' onClick={handleClick2}>^</span>
                                <div className='project-name'>StyleSwap</div>
                            </div>
                            <span className='project-summary'>A social media site to share new styles and sell used clothing <span className='in-progress-note'> (deployment in progress)</span></span>
                        </div>
                        <div className='home-project-onclick2'>
                            <p className='project-info-line'>Collaborated in a group to build a full stack web application connected via Express.js and Node.js to our MongoDB database</p> 
                            <p className='project-info-line'></p>
                            <p className='project-info-line'>Created an encapsulated front-end environment, allowing users to post, comment, and like</p>
                            <p className='project-info-line'>Implemented a marketplace that allows users to post secondhand clothing for purchase as well as add secondhand items to their cart</p>
                            <p className='project-info-line'>Utilized React's built-in useContext method to implement site-wide sign-up, log-in, and log-out functionality</p>
                            <p><strong>Languages:</strong> Javascript, CSS, HTML</p>
                            <p><strong>Frameworks:</strong> React, Mongoose, Express</p>
                            <p><strong>Database:</strong> MongoDB</p>
                        </div>
                    </div>
                    <div className='project'>
                        <a href="http://clear-ear.surge.sh/" target='_blank'><img className='project-photo clearear-photo' src={clearEar} alt="" /></a>
                        <div className='project-popup'>
                            <div className='project-button-and-name'>
                                <span className='popup-button' onClick={handleClick3}>^</span>
                                <div className='project-name'>clearEar</div>
                            </div>
                            <span className='project-summary'>A musical ear training site with a guitar-hero-like atmosphere</span>
                        </div>
                        <div className='home-project-onclick3'>
                            <br />
                            <br />
                            <p className='project-info-line'>Designed and developed a web application using the Tone.js library, linking animations with sounds</p> 
                            <p className='project-info-line'>Utilized CSS keyframe animations to turn clearEar into a guitar-hero-like atmosphere</p>
                            <p className='project-info-line'>Implemented an option allowing the user to guess the note or key depending on the chosen level</p>
                            <br />
                            <br />
                            <p><strong>Languages:</strong> Javascript, CSS, HTML</p>
                            <p><strong>Frameworks:</strong> Tone.js</p>
                        </div>
                    </div>
                    <div className='project'>
                        <a href="https://thelibationstation.netlify.app/" target='_blank'><img className='project-photo libationstation-photo' src={libationStation} alt="" /></a>
                        <div className='project-popup'>
                            <div className='project-button-and-name'>
                                <span className='popup-button' onClick={handleClick4}>^</span>
                                <div className='project-name libationstation-text'>The Libation Station</div>
                            </div>
                            <span className='project-summary'>A one-stop-shop to find all drink recipes</span>
                        </div>
                        <div className='home-project-onclick4'>
                            <br />
                            <p className='project-info-line'>Collaborated in a group to build a full stack application connected via Express.js and Node.js</p> 
                            <p className='project-info-line'>Utilized various dependencies including React.js to implement an encapsulated environment, allowing for data to be passed down through properties, useNavigate, and useParams</p>
                            <p className='project-info-line'>Connected to the MealDB API to pull from an exhaustive database</p>
                            <p className='project-info-line'>Implemented functionality for users to find alcoholic and non-alcoholic beverages</p>
                            <br />
                            <br />
                            <p><strong>Languages:</strong> Javascript, CSS, HTML</p>
                            <p><strong>Frameworks:</strong> React</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='languages-section'>
                <h1 className='languages-section-header'>My Tools</h1>
                <div className='languages'>
                    <p>Languages: JavaScript · Python · CSS3 · HTML5</p>
                    <p>Libraries: React.js · Express.js · Node.js · Django · Mongoose · SASS · JQuery · Tone.js · Chart.js</p>
                    <p>Databases: MongoDB · PostgreSQL</p>
                    <p>Other: Github · VSCode · Figma · Canva · Lucidchart · Trello</p>
                </div>
            </div>
        </main>
    )
}