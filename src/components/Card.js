import React from 'react';


const Card = ({id, email, name}) => {
  return (
    <div className='bg-light-green dib br3 ma2 grow'>
      <div>
        <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
        <div>
          <h2>
            {name}
          </h2>
          <p>
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

