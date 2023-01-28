import './Cheese.css'


const Cheese = (props) => {
  return (
    <div style={{flexBasis:"100%", display:"flex", justifyContent:"center",paddingTop:"5px"}}>
      <div className='cheese' style={{backgroundColor: "yellow", width: "800px", height:"95px" }}>
        {props.ingredient}
      </div>
    </div>
  )
}

export default Cheese
