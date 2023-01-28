const Meat = (props) => {
    return (
      <div style={{flexBasis:"100%", display:"flex", justifyContent:"center",paddingTop:"5px"}}>
        <div style={{backgroundColor: "brown", width: "800px", height:"150px", borderRadius:"150px",fontSize:"50px" }}>
          {props.ingredient}
        </div>
      </div>
    )
  }
  
  export default Meat