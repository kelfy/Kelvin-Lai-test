import React from "react";

const ProductBox = ({ 
    items 
}) => {
    
    return(
        <React.Fragment>
        {items.map( item => (

            

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 border">
                <img src={"img/"+item.productImage} alt={item.productName} className="product-image"/>
                <div className="row">
                    <div className="col">
                        {item.isSale ? (<div className='sale'>Sales</div> ) : ''}
                        {item.isExclusive ? (<div className='excl'>Exclusive</div> ) : ''} 
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <span className="product-name">{item.productName}</span>
                    </div>
                    <div className="col-12 col-md-3">
                        <span className="product-price">{item.price}</span>
                    </div>
                </div>
            </div>  

        ))}
        </React.Fragment>
    )
  
};

export default ProductBox;
