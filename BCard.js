import React ,{ useState } from 'react';
import './BCard.css'

export default function TkCard(props) {
  const [count, setCount] = useState(0);
  const increment =() =>
  {
      setCount(count+1);
  }
  const decrement =() =>
  {
      setCount(count-1);
  }
  return (
    // <div className='booking-div'>
    //     <div class="wrapper-div">
    //         <div className='booking-img'>
    //           <img src={props.imgURL} width="280px" height="170px"></img>
    //         </div>
    //         <div className='room-nos'>
    //           <div className='room'>
    //             <p><b>{props.room}</b></p>
    //             <p>{props.details}</p>
    //             <p><b>{props.rate}</b>/ per night</p>
    //           </div>
    //           <div className='num'>
    //             <button onClick={increment} className='inc'>+</button> {count} <button onClick={decrement} className='dec'>-</button>
    //           </div>
    //           <div className='cart'>
    //             <button className='add-cart'>Add to Cart</button>
    //           </div>
    //         </div>
    //     </div>
    // </div>

    <div className='booking-div'>
      <div className='wrapper-div'>
        <div className='booking-img'>
          <img src={props.imgURL} width="280px" height="170px"></img>
        </div>
        <div className='room-info'>
          <p>{props.id}. <b>{props.room}</b></p>
          
          <p>{props.details}</p>
          <p><b>{props.rate}</b>/ per night</p>
        </div>
      </div>
    </div>
  )
}
