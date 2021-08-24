import React, { Component } from 'react';
import GridListItem from '../grid-list-item';
import './grid.css';

const Grid = ({ gridData, onMoveTo, ...props }) => {

  let classNames = 'list-group todo-list'

  if(props.isInfo)
    classNames += ' short'

  if(props.isMiddle){
   // onMoveToLeft = onMiddleToLeft
    //onMoveToRight = onMiddleToRight
  }  
  if(props.isLeft){
    classNames += ' left-grid'

  }

  if(props.isRight){
    classNames += ' right-grid'

  }
  //const side = "left"
  //const right = "right"

  const elements = gridData.map((item) => {
    const { id, ...itemProps } = item;      
    return (
      <li key={id} className="list-group-item">
        <GridListItem 
        {...itemProps }  
        onMoveTo = {()=> onMoveTo(id)}
        />
      </li>
    );
  });

  return (
    <ul className={classNames} >
      { elements }
    </ul>
  );
};

export default Grid;




