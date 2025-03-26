import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import defaultProfile from './imgs/pp11.jpg'; // Updated import path

function App() {
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const matrix = document.getElementById('matrix');
    const ctx = matrix.getContext('2d');

    matrix.width = window.innerWidth;
    matrix.height = window.innerHeight;

    const characters = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*' +
      'अआइईउऊऋएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह' + // Sanskrit
      'అఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘచఛజఝటఠడఢణతథదధనపఫబభమయరఱలళవశషసహ' + // Telugu
      'ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىي';
    const fontSize = 16;
    const columns = matrix.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, matrix.width, matrix.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px 'Noto Sans', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrix.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 30);
    return () => clearInterval(interval);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="App">
      <canvas id="matrix"></canvas>
      
      <div className="content">
        <div className="profile-header">
        <div className="profile-circle" onClick={triggerFileInput}>
  <img src={profileImage} alt="Profile" className="profile-picture" />
  
</div>
          <div className="profile-text">
            <h1>Sukruth Kotturu</h1>
            <h2><b>Software Developer | Machine Learning | AWS</b></h2>
            <h2>Masters in Computer Science: Umass Boston | Bachelors in Mechanical Engineering: SRMIST </h2>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>

      <div className="rest">
        {/* Bio Section */}
        <section className="section">
          <h2>Bio:</h2>
          <p>
            As a former mechanical engineer who found a profound passion in Algorithms, I've pivoted my career towards the ever-evolving world of software development and artificial intelligence. Currently pursuing a Master's in Computer Science at the University of Massachusetts Boston, I specialize in crafting captivating user experiences and building platforms that digitize intriguing ideas. My expertise extends across crafting dynamic user experiences and robust backend functionalities. I'm actively seeking full-time roles where I can apply my technical skills in Web development, Web Design, Machine Learning/AI. Let's connect and explore potential collaborations!
          </p>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2>SKILLS</h2>
          <ul className="skills-list">
            <li><span className="bullet">●</span> <strong>Front-End & Backend:</strong> Flutter, React, Node.js, React Redux Toolkit, Figma, Android Studio</li>
            <li><span className="bullet">●</span> <strong>Languages & Tools:</strong> Java, Python, JavaScript, Dart, Kotlin, TypeScript, CSS, HTML, Figma</li>
            <li><span className="bullet">●</span> <strong>Databases:</strong> MySQL, NoSQL MongoDB, Firebase, AWS RDS</li>
            <li><span className="bullet">●</span> <strong>Cloud:</strong> AWS EC2, AWS S3, Elastic Beanstalk</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2>EXPERIENCE</h2>
          <div className="experience-item">
            <h3>DATASparx LLC <span className="date">Oct 2024 – Present</span></h3>
            <h4>Front End Developer Intern</h4>
            <ul className="experience-list">
              <li><span className="bullet">●</span> Engineered a ReactJS booking app enabling amenity reservations and player/coach registrations via a resident portal for multiple retailers across various cities, serving 500+ users</li>
              <li><span className="bullet">●</span> Implemented retailer portal features using React Hooks and Redux Toolkit, improving facility registration efficiency by 30%</li>
              <li><span className="bullet">●</span> Developed an admin portal for cross-portal data management using DOM manipulation and React Router</li>
              <li><span className="bullet">●</span> Integrated Razorpay and Google/Facebook authentication, reducing login time by 28%</li>
            </ul>
          </div>
        </section>

        {/* Project 1 Section */}
        <section className="section">
          <h2>RETAILER UI</h2>
          <div className="project-item">
            <h3>Booking App for DATASparx</h3>
            <p>Developed a comprehensive booking system with ReactJS and Redux Toolkit that handles amenity reservations and player/coach registrations.</p>
            <ul className="project-list">
              <li><span className="bullet">●</span> Built responsive UI with React components</li>
              <li><span className="bullet">●</span> Integrated Razorpay payment gateway</li>
              <li><span className="bullet">●</span> Implemented social authentication</li>
            </ul>
            <a href="https://github.com/Sukruth99/Retailer-UI" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        </section>

        {/* Academic Projects */}
        <section className="section">
          <h2>ACADEMIC PROJECTS</h2>
          <div className="project-item">
            <h3>Machine Learning Model for Image Recognition</h3>
            <p>Developed a CNN model for image classification using TensorFlow and Keras.</p>
            <a href="https://github.com/Sukruth99" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
          <div className="project-item">
            <h3>E-Commerce Platform</h3>
            <p> ● Designed and developed a mobile-friendly project prototype with Android Studio and Kotlin, reducing load times 
                          by 30% and improving app performance,cross-platform compatibility.<br></br> 
                          ● Led the front-end development of an e-commerce platform using React.js, achieving a 20% increase in mobile user 
                       engagement<br></br>
                       ● Designed and developed a mobile-friendly project prototype using Android Studio and Kotlin, laying the 
                  foundation for mobile development and ensuring cross-platform compatibility. <br></br>
                     ● Created UI designs in Figma, ensuring an appealing and responsive user interface that enhanced user satisfaction.</p>
            <a href="https://github.com/Sukruth99/By_The_Fireside_Stories" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <h2>CERTIFICATIONS</h2>
          <ul className="certifications-list">
            <li><span className="bullet">●</span> LinkedIn Learning: Data Structures in Java</li>
            <li><span className="bullet">●</span> Y-Hills: Machine Learning Intern</li>
            <li><span className="bullet">●</span> LinkedIn Learning: Web Fundamentals</li>
          </ul>
        </section>

        {/* Social Icons */}
        <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
  <a href="#"><i className="fab fa-twitter"></i></a>
  <a href="https://www.linkedin.com/in/sukruth-kotturu-3a65a3270/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://www.instagram.com/sukruth_00/?locale=en_US%2Cen_US" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
        </div>
      </div>
    </div>
  );
}

export default App;