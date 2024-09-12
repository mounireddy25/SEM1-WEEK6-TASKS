import React from 'react'
import './App1.css'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Greeting from './Greeting';
import Button from './Button';
import Counter from './Counter';
import Layout from './Layout';
import DateTime from './DateTime';
import Welcome from './Welcome';
import UserProfile from './UserProfile';
import Product from './Product';
import Button1 from './Button1';
import ContactCard from '../ContactCard';
import wel from './Wel';

  function App1() {
    const contactInfo = {
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
    };
  
  function getPersonalizedMessage() {
    return `Hello, ${name}!`;
  }

  const names = ['mouni', 'divi', 'kalyani'];
  const favoriteFoods = ['Pizza', 'Tacos', 'BBQ', 'Ice Cream'];

  return (
     <div>
      {/* 
        JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. 
        It's used to create React elements, which are the building blocks of React applications. 
        JSX is converted to regular JavaScript at compile-time, making it easy to write and maintain React code.
      */}

    <h1>Welcome to React!</h1>
    <h2>React is a JavaScript library for building UIs</h2>
    <h3 style={{color:'black'}}>Hello World</h3>
    <ul>{names.map((name,index) => (<li key={index}>{name}</li>))}
    </ul>
    <br />
    <Header />
      {/* Other components */}
      <Footer />
      <br />
      <Header />
      <Content />
      <Footer />
      <br />
      <Header />
      <Content />
      <ul>
        {favoriteFoods.map((food, index) => (<li key={index}>{food}</li>))}
      </ul>
      <Footer />
      <br />
    <Header />
    <Greeting />
    <Content />
    <Footer />
    <br />
    <Header />
      <Greeting />
      <Content />
      <Button text="Click me!" onClick={() => alert('Button 1 clicked!')} />
      <Button text="Click me too!" onClick={() => alert('Button 2 clicked!')} />
      <Footer />
      <br />
      <Header />
      <Greeting />
      <Content />
      <Counter />
      <Footer />
      <br />
      <Layout/>
      <br />
      <h1>{getPersonalizedMessage()}</h1>
      <br />
      <DateTime/>
      <br />
      <Welcome name="Mouni" />
      <br />
      <Welcome name="Nandhu" />
      <Welcome name="Divi" />
      <Welcome name="Kalyani" />
       <br />
       <UserProfile name="Mouni" age="19" location="Garden City" />
      <UserProfile name="Komala" age="20" location="Alliance" />
      <UserProfile name="Kalyani" age="21"  />
      <br />
      <Product
        name="Apple iPhone"
        price={999.99}
        description="A high-end smartphone with advanced features."/>
      <Product
        name="Samsung TV"
        price={1299.99}
        description="A 4K smart TV with HDR and wide color gamut."/>
      <Product
        name="Sony Headphones"
        price={99.99}
        description="Wireless noise-cancelling headphones with long battery life."/>
      <br />

      <Button text="Click me!" color="blue" />
      <Button text="Submit" color="#2196F3" />
      <Button text="Cancel" color="#F44336" />
      <br />
      <br />
      <ContactCard contact={contactInfo} />
      <br />
       <Welcome name="mouni"/>

 </div>

  );
}

export default App1;