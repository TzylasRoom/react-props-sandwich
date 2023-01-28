const BottomBun = (props) => {
    return (
      <div style={{flexBasis:"100%", display:"flex", justifyContent:"center",paddingTop:"5px"}}>
        <div style={{backgroundColor: "bisque", width: "800px", height:"150px", borderBottomRightRadius:"150px", borderBottomLeftRadius:"150px"}}>
          {props.ingredient}
        </div>
      </div>
    )
  }
  
  export default BottomBun