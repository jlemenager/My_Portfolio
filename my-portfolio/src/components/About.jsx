export default function About(){
    return(
        <div className='about'>
            <div className="about-header">
                <div>
                    <h1 className='about-header-text'>About Me</h1>
                    <p className='about-header-description'>I am a full-stack software engineer who uses an innovative, organized, and determined mindset to improve the landscape of companies. Having moved up the ladder at a sustainable fashion tech startup by improving their marketing presence and affiliate partnerships, helping companies improve the world is a passion of mine. I spend a lot of time theorizing solutions to problems, and, as a developer, I utilize this mindset to make lasting change from the ground up.</p>
                    <button><a href="https://github.com/jlemenager" target="_blank">Github</a></button><button><a href="https://docs.google.com/document/d/e/2PACX-1vTKYJYO-ZuwJqDUSRfSsH9Mm2ABtkMNcaoi6RPDCFHc0kp4cOXg4veHj9xxDJBOT7EOtD4KFK9O4VcM/pub" target="_blank">Resume</a></button><button><a href="https://www.linkedin.com/in/jeremy-lemenager-dev/" target="_blank">LinkedIn</a></button>
                </div>
                <img className='about-photo' src="src/images/hshot6.jpg" alt="image of jeremy" />
            </div>
        </div>
    )
}