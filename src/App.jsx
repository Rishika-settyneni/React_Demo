import './App.css'

function App() {
  return (
    <>
    <section style={{textAlign: "center", margin: 0, padding: 0}}>
      <header  style={{display:"flex",justifyContent: "space-evenly"}}>
        <img height={20} width={120} src="https://zerodha.com/static/images/logo.svg" alt="Zerodha Logo" />

        <nav style={{display:"flex",gap: "20px",alignItems: "center"}}>
          <a href="">Sign up</a>
          <a href="">About</a>
          <a href="">Products</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </nav>
      
      </header>
   
    <img height={800} width={800}  src = "https://zerodha.com/static/images/landing.svg" alt = "Zerodha Landing Page" />
    <h2 >Invest in everything</h2>
    <p >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button id="btn" >Sign up for free</button>
    </section>
    
    </>
   
  )
}

export default App
