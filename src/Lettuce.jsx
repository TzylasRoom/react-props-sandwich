import './Lettuce.css'

const Lettuce = () => {
  return (
    <div style={{flexBasis:"100%", display:"flex", justifyContent:"center",paddingTop:"5px"}}>
      <div className="lettuce" style={{backgroundColor: "green", width: "800px", height:"30px" }}>
        Lettuce
      </div>
    </div>
  )
}

export default Lettuce