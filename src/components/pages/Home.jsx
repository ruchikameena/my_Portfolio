import React, {useEffect, useState} from 'react';
import './Home.css'
const Home = () =>{
    const [text,setText] = useState('');
    const helloText = [
      "Hello",      // English
      "नमस्ते",      // Hindi
      "안녕하세요",    // Korean
      "Hola",      // Spanish
      "Bonjour",    // French
      "こんにちは",    // Japanese
      "Hallo",      // German
      "Ciao",       // Italian
      "Olá",        // Portuguese
      "سلام"         // Arabic
  ];
  

    useEffect(()=>{
        let i=0;
        const interval = setInterval(()=>{
            setText(helloText[i]);
            i=(i+1)%helloText.length;
        }, 1000);
    },[]);

    return(
        <div className="home-container">
          <div className="animated-text">
          <p>{text}</p>
          <p>Welcome to my portfolio</p>
        </div>
      <div className="main">
      <div className="left-section">
        <h1>Ruchika Meena</h1>
        <p>Computer Science Undergraduate | SKIT Jaipur (2022–2026)</p>
        <p>Hey there! I'm a curious tech enthusiast who loves turning ideas into real projects. Whether it’s designing with React or solving problems in C++, I enjoy the thrill of building things that make an impact. Actively looking for opportunities to gain industry experience and contribute to innovative projects.</p>
      </div>
      <div className="right-section">
        <div className="image-container">
          <img src="/path/to/cartoon-image.png" alt="Cartoon" />
        </div>
      </div>
      </div>
    </div>
    );
}

export default Home;