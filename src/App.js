import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import MainComponent from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <MainComponent />
      </Router>
    )
  }
}

export default App;