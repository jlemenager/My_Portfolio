import Nav from './Nav'
import { useEffect, useState } from 'react'

export default function Header(){

    //Constants

const [text, setText] = useState('')
let typewriterText = 'React'
let l = 0
let texts = 'React'
const typeSpeed = 150
console.log(...text)
    //Typing Effect Functions

const typingEffect = () => {
    if (l<4 && typewriterText === 'React'){
        setText(...text, typewriterText.charAt(l))
        l++
        let timer;
        clearTimeout(timer)
        timer = setTimeout(typingEffect,typeSpeed)
    } else if (l===text.length && typewriterText === 'React'){
        setTimeout(()=>{
        l=0
        typewriterText = 'Javascript'
        setText('')
        setTimeout(typingEffect,100)
    },700)
    } else if (l<text.length && typewriterText === 'Javascript'){
        setText(...text, typewriterText.charAt(l)) 
        l++
        clearTimeout()
        timer = setTimeout(typingEffect,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'Javascript'){
        clearTimeout()
        timer = setTimeout(()=>{
        l=0
        typewriterText = 'Node.js'
        setText('')
        setTimeout(typingEffect, 100)
        }
        ,700)
    } 
    // else if (l<typewriterText.length && typewriterText === 'Node.js'){
    //     placeForTypewriterText.innerHTML += typewriterText.charAt(l)
    //     l++
    //     setTimeout(typingEffect,typeSpeed)
    // } else if (l===typewriterText.length && typewriterText === 'Node.js'){
    //     setTimeout(()=>{
    //     l=0
    //     typewriterText = 'Express.js'
    //     placeForTypewriterText.innerHTML = ''
    //     setTimeout(typingEffect,100)
    // },700)
    // } else if (l<typewriterText.length && typewriterText === 'Express.js'){
    //     placeForTypewriterText.innerHTML += typewriterText.charAt(l)
    //     l++
    //     setTimeout(typingEffect,typeSpeed)
    // } else if (l===typewriterText.length && typewriterText === 'Express.js'){
    //     setTimeout(()=>{
    //     l=0
    //     typewriterText = 'MongoDB'
    //     placeForTypewriterText.innerHTML = ''
    //     setTimeout(typingEffect,100)
    // },700)
    // } else if (l<typewriterText.length && typewriterText === 'MongoDB'){
    //     placeForTypewriterText.innerHTML += typewriterText.charAt(l)
    //     l++
    //     setTimeout(typingEffect,typeSpeed)
    // } else if (l===typewriterText.length && typewriterText === 'MongoDB'){
    //     setTimeout(()=>{
    //     l=0
    //     typewriterText = 'Mongoose'
    //     placeForTypewriterText.innerHTML = ''
    //     setTimeout(typingEffect,100)
    // },700)
    // } else if (l<typewriterText.length && typewriterText === 'Mongoose'){
    //     placeForTypewriterText.innerHTML += typewriterText.charAt(l)
    //     l++
    //     setTimeout(typingEffect,typeSpeed)
    // } else if (l===typewriterText.length && typewriterText === 'Mongoose'){
    //     setTimeout(()=>{
    //     l=0
    //     typewriterText = 'Python'
    //     placeForTypewriterText.innerHTML = ''
    //     setTimeout(typingEffect,100)
    // },700)
    // } else if (l<typewriterText.length && typewriterText === 'Python'){
    //     placeForTypewriterText.innerHTML += typewriterText.charAt(l)
    //     l++
    //     setTimeout(typingEffect,typeSpeed)
    // } else if (l===typewriterText.length && typewriterText === 'Python'){
    //     setTimeout(()=>{
    //     l=0
    //     typewriterText = 'Django'
    //     placeForTypewriterText.innerHTML = ''
    //     setTimeout(typingEffect,100)
    // },700)
    // } else if (l<typewriterText.length && typewriterText === 'Django'){
    //     placeForTypewriterText.innerHTML += typewriterText.charAt(l)
    //     l++
    //     setTimeout(typingEffect,typeSpeed)
    // } else if (l===typewriterText.length && typewriterText === 'Django'){
    //     setTimeout(()=>{
    //     l=0
    //     typewriterText = 'React'
    //     placeForTypewriterText.innerHTML = ''
    //     setTimeout(typingEffect,100)
    // },700)
    // }
}
useEffect(()=>{
    typingEffect()
    console.log(l)
},[])

    return(
        <header>
        <Nav/>
        </header>
    )
}