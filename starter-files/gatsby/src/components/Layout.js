import React from 'react';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlodalStyles';
import Typography from '../styles/Typography';


export default function Layout(props) {
  return(
    <div>
      <GlobalStyles />
      <Typography />
        <Nav />
          {props.children}
        <Footer />
    </div>
  )
}