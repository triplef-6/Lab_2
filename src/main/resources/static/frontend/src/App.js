// import './App.css';
import React, { useState } from 'react';
import LoginComponent from './components/customer/LoginComponent';
import CustomerProfile from './components/customer/CustomerProfile';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerId, setCustomerId] = useState(null);

  const handleSuccessfulLogin = (id) => {
    setIsLoggedIn(true);
    setCustomerId(id);
  };

  return (
    <div>
      {isLoggedIn ? (
        <CustomerProfile customerId={customerId} />
      ) : (
        <LoginComponent onLoginSuccess={handleSuccessfulLogin} />
      )}
    </div>
  );
};
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
