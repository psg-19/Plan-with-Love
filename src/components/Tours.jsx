
import Card from './Card.jsx'

function Tours(props){
    // console.log(tours_data[0]);
    console.log(props.removeTour);
return(
    <div className='container'>
         <div>
         <h2 className='title'> Plan with Love</h2>
         </div>

<div className="cards"> 



{
    props.tours_data.map((tour)=>{
        console.log(tour)
        let Object={...tour};
        return <Card key={Object.id} Object={Object} removeTour={props.removeTour}></Card>
    })
}
</div>
    </div>
)
}

export default Tours;

