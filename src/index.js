import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';

class MyInfo extends React.Component {
  render() {
    return (
      <div>
          <p className="Info"><a href="mailto:Info@ateeca.com" style={{color: "white"}}>Info@ateeca.com</a> | <a href="tel:+1 908-668-1250" style={{color: "white"}}>+1 908-668-1250</a> </p>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));
