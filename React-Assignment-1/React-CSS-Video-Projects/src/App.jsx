import React from 'react';
import CardProfile from './components/CardProfile';
import ContactForm from './components/ContactForm';
import CreditCard from './components/CreditCard';
import CssLoader from './components/CssLoader';
import FlipCard from './components/FlipCard';
import GradientText from './components/GradientText';
import KeyboardDesign from './components/KeyboardDesign';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CardProfile />
      <ContactForm />
      <CreditCard />
      <CssLoader />
      <FlipCard />
      <GradientText />
      <KeyboardDesign />
      <SearchBox />
    </div>
  );
}

export default App;
