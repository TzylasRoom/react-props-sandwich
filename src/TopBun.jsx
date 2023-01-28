import './TopBun.css'

const TopBun = (props) => {
  return (
    <div style={{flexBasis:"100%", display:"flex", justifyContent:"center", paddingTop:"10px"}}>
    <div className='top-bun' style={{backgroundColor: "bisque", width: "800px", height:"150px", borderTopRightRadius:"150px", borderTopLeftRadius:"150px"}}>
      {props.ingredient}
    </div>
  </div>
  )
}

export default TopBun