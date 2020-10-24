import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <div className='cards'>
      <div className='card'>
        <img src='https://wallpapercave.com/wp/wp4056410.jpg' alt='mypic' className='card_img' />
        <div className='card_info'>
          <span className='card_category'> A Netflix Orignal series</span>
          <h3 className='card_title'> Dark </h3>
          <a href='https://www.netflix.com/in/title/80990668?source=35' target='_blank'>
            <button>Watch Now</button>
  
          </a>
        </div>
      </div>

    </div>
  </>,
  document.getElementById('root'))
