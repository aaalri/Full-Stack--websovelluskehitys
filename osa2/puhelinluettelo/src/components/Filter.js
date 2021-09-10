import React from 'react'
  
  const Filter = (props) => {  return (
        <div>
            filter by name: <input
                    value={props.nameFilter}
                    onChange={props.handleNameFilter}       
                />
        </div>
	 )
  }

export default Filter