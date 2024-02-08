import { useState } from 'react';
import Tours from './components/Tours'
import './App.css';
import data from './data'



function App() {
  const [tours,setTours]=useState(data)

  // console.log(removeTour);
  function removeTour(id){
    const newTours=tours.filter(tour => tour.id!==id)
    setTours(newTours)
    }
    if(tours.length==0){
      return(
        <div className='refresh'>
          <h2>No Tours Left</h2>
          <button className='btn-white' onClick={()=> setTours(data)}> Refresh</button>
        </div>
      )
    }
  return (
    <div className="App">
     
      <Tours tours_data={tours} removeTour={removeTour}></Tours>
    </div> 
  );
}

export default App;
