import React from 'react'
import { Team } from './Team'
function Myreact() {
  return (
    <div>
      <div className="card" style={{backgroundColor:"#eee", padding:"30px", maxWidth:"70%", margin:"auto"}}>
        <h1>Hello React JS</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ullam ipsum vel, adipisci quia ducimus ea reiciendis at dolorem temporibus!</p>
        <button style={{padding:"10px 20px", color:"#eee", backgroundColor:"black"}}>Hello</button>
      </div>

      <div style={{textAlign:"left", maxWidth:"100%", margin:"auto", display:"flex", flexWrap:"wrap", padding:"0px 15%", justifyContent:"space-around", marginTop:"30px"}}>
      {
        Team.map(data => 
          <div className="" style={{backgroundColor:"#eee", padding:"20px", maxWidth:"21%", display:"inline-block", margin:"10px 0.5%",borderRadius:"10px"}}>
            <div style={{width:"100%", textAlign:"center"}}><img style={{width:"150px", height:"150px", margin:"auto", borderRadius:"50%"}} src={data.url} alt="" /></div>
            <h5>Name : {data.name}</h5>
            <h6>Position : {data.Position}</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button style={{padding:"10px 20px", color:"#eee", backgroundColor:"black"}}>Vio</button>
          </div>
          )
      }
      </div>


    </div>
  )
}

export default Myreact