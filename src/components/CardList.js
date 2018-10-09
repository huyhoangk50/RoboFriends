import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {
  const cardComponents = robots.map((robot, index) => {
    return <Card 
    key = {robot.id} 
    id={robot.id} 
    name = {robot.name} 
    email = {robot.email}/>
  });
  return (
    <div>
      {cardComponents}
    </div>
  );
}

export default CardList;