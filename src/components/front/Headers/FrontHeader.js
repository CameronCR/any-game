import React, { Component } from 'react';

import { StickyContainer, Sticky } from 'react-sticky';

import SocialMediaBanner from './SocialMediaBanner';
import ContactBanner from './ContactBanner';
import NavBar from './NavBar';
import Slider from './Slider';

class FrontHeader extends Component {
  constructor(props){
    super(props);

    this.state = {
      scrollingLock: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    if (window.scrollY > 143) {
      this.setState({
        style: { width: "100%", position: "fixed", top: "0", zIndex: "5000", backgroundColor: "white"}
      });
    } else if (window.scrollY < 143) {
      this.setState({
        style: { width: "100%", position: "relative"}
      });
    }
  }

  render() {
    return(
      <div>
        <SocialMediaBanner />
        <ContactBanner />
        <NavBar style={this.state.style} />
        <Slider />
      </div>
    );
  }
}

export default FrontHeader;
