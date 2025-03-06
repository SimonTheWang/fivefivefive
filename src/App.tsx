import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#000000'); // Default background color

  useEffect(() => {
    setBgColor('#FFFFFF'); // White background color
  }, []);

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      minHeight: '100vh', 
      minWidth: '100vw',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div className="mb-8">
        <img 
          src="/logo.png" // Update with your actual logo filename
          alt="Logo"
          width={300}
          height={300}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <a 
        href="https://lu.ma/555mtl" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <h1 style={{ color: 'black', fontSize: '1.5rem' }}>Click here</h1>
      </a>
    </div>
  );
}

export default App;
