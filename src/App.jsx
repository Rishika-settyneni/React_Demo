import { useState } from "react";
import './App.css'
import Header from './Header.jsx'
import Products from './Products.jsx'

function App() {
  return (
    <>
    <section style={{textAlign: "center"}}>
      <Header />
      
   
    <img height={800} width={800}  src = "https://zerodha.com/static/images/landing.svg" alt = "Zerodha Landing Page" style={{AlignContent:"space-around"}}/>
    <h2 >Invest in everything</h2>
    <p >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id="btn" >Sign up for free</button>
    
    </section>

    <section>
      <h1>Cards</h1>
      <Products />
    </section>
    
    </>
  )
}

export default App
