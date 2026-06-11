function Card({image,title,price}) {
  return (
    <>
    <div style={{border:"1px blue solid",
        width:"300px",
        textAlign:"center",
        borderRadius:"10px"}}>
     <img  height={150} width={150} src={image} alt="" />
     <h3>{title}</h3>
     <h4>{price}</h4>
    </div>
    </>
  )
}

export default Card