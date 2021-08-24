import React ,{Component}from 'react';

import './grid-list-item.css';

export default class GridListItem extends Component {

  render(){
    const { id, title , onMoveTo } = this.props  
  
    return (
      <span >
        <span
          className="todo-list-item-label"
         >
          {title}
        </span>
  
        <button type="button" 
                className="btn btn-outline-success btn-sm float-right right-button"
                onClick ={ onMoveTo } 
               >
          <i className="fa fa-arrow-right" />
        </button>
  
        <button type="button "
                className="btn btn-outline-danger btn-sm float-right left-button"
                
              >
          <i className="fa fa-arrow-left" />
        </button>
      </span>
    );
  }
}


