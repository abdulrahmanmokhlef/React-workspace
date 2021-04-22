import React from 'react'
import PropTypes from 'prop-types';

const ItemsList = (props)=>{
  return(
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
  	</div>
  )
} 

ItemsList.propTypes = {
	items: PropTypes.array.isRequired
}

export default ItemsList;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         