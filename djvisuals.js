// POSSIBLE REACT SOLUTION!

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [textColor, setTextColor] = useState('#7734ea'); // Initial text color
//   const [backgroundColor, setBackgroundColor] = useState('#000'); // Initial background color

// //   Calculate complementary color
//   const calculateComplementaryColor = (color) => {
//     // Implement your color calculation logic here
//     // Example: return complementary color
//     return '#' + (0xFFFFFF ^ parseInt(color.slice(1), 16)).toString(16).padStart(6, '0');
//   };

//   // Use useEffect to monitor changes in textColor and update backgroundColor
//   useEffect(() => {
//     setBackgroundColor(calculateComplementaryColor(textColor));
//   }, [textColor]);

//   return (
//     <div style={{ backgroundColor: backgroundColor }}>
//       <h1 className="djText" style={{ color: textColor }}>SLKT</h1>
//       <p className="djText" style={{ color: textColor }}>@slkt.nyc</p>
//     </div>
//   );
// }

// export default App;
