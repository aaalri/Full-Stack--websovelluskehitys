import React from 'react'
  
  const Filter = (props) => {  return (
        <div>
            find countries: <input
                    value={props.nameFilter}
                    onChange={props.handleNameFilter}       
                />
        </div>
	 )
  }

export default Filter