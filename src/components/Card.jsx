
import { useState } from "react";


function Card(props){
    const [readmore,setreadmore]=useState(false)
  const [desc,setdesc]=useState(props.Object.info.substring(0,45)+'  ...  ');
const[flag,setflag]=useState(0)
   function readmoreHandler(){
    setreadmore(!readmore);
   if(flag==0){
    setdesc(props.Object.info);
   setflag(1)
   }
   else {
    setdesc(props.Object.info.substring(0,45)+'  ...   ')
    setflag(0)
   }

   }

  

    return(
   
         <div className="card">
            <img className="image" src={props.Object.img} alt="" />
            <div className="tour-info">
            <div className="tour-details">
            <h4 className="tour-price">${props.Object.price}</h4>
                <h4 className="tour-name">{props.Object.name}</h4>
                </div>
                <div className="description">{desc}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? ` show less`:` read more`}
                </span>
                </div>
                </div>

            
        <button className="btn-red" onClick={() => props.removeTour(props.Object.id)}> Not Interested</button>
        </div>
     
    )

}

export default Card;