import React, { Component } from 'react';
import Aside from '../../Components/Aside/Aside.jsx';
import Alert from '../../Components/Alert/Alert.jsx';
import Carrousel from '../../Components/Carrousel/Carrousel.jsx';
import Quote from '../../Components/Quote/Quote.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
class Home extends Component {
  render() {
    return (
      <div>
        <Alert/>
        <Carrousel/>
        <Aside/>
        <Quote/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
