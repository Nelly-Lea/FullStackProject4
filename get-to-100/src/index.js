// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import Sign_up from './component/sign_up';

 const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
//ReactDOM.render(<Counter/>, document.getElementById("root"));

root.render(<Sign_up/>);

// root.render(myFirstElement);
//ReactDOM.render(<Counter/>, document.getElementById("root"));
