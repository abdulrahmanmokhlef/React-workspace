import React from 'react'
import PropTypes from 'prop-types';

const DeleteItem = (props)=>{
  const handleDeleteLastItem = event => {
    props.onDeleteLastItem();
  };
  debugger
	 return(
       <button onClick={handleDeleteLastItem} disabled={props.isDisabled}>
          Delete Last Item
       </button>
     )
}

DeleteItem.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired
}

export default DeleteItem;