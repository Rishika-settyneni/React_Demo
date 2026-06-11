function Header() {

  let togglemode=()=>{
    document.body.classList.toggle("change")
  }
  return (
   <>
       <header  style={{display:"flex",justifyContent: "space-evenly"}}>
        <img height={20} width={120} src="https://zerodha.com/static/images/logo.svg" alt="Zerodha Logo" />

        <nav style={{display:"flex",gap: "20px",alignItems: "center"}}>
          <a href="">Sign up</a>
          <a href="">About</a>
          <a href="">Products</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
          <button onClick={togglemode}>Dark/Light</button>
        </nav>
      
      </header>
   </>
  )
}

export default Header