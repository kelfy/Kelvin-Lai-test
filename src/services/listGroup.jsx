import React from 'react';


const ListGroup = ({
    items, 
    onSizeSelect, 
    selectedSize 
}) => {

    return (
    
        <React.Fragment>
    
        {items.map(item => (
            <div onClick={()=> onSizeSelect(item)} 
                key={item} 
                className={
                    item === selectedSize ? "col-1 list-group-item active" : "col-1 list-group-item" 
                    }>
                
                {item}
            </div>
        
        ))}
    
        </React.Fragment>
    )
};

export default ListGroup;