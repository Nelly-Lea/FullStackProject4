
// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react rajouter plusieurs pages
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))  ;
root.render(<App/>);