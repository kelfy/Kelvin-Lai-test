import React, { Component } from 'react';
import ListGroup from '../services/listGroup';
import ProductBox from '../services/productBox';
import { getProducts } from '../services/productsServices';

class Products extends Component{
    state = {
        products:[],
        size: ['All','XS','S','M','L','XL']
        

    }
    componentDidMount(){
        this.setState({products: getProducts()  })
    }

    handleSizeSelect = size =>{
        this.setState({
            selectedSize: size
        });
        console.log(size);
    }

    getPageData = () => {
        const {
            products: allProducts,
            selectedSize
        } = this.state;

        const filtered = selectedSize && selectedSize !== 'All' ? allProducts.filter( 
            m => m.size.includes(selectedSize)) : allProducts;

        
    

        const products = filtered;
        
        return {data: products}
        
        

    };

    
    render(){
       
        const {data: products } = this.getPageData();
              
        
        return(
        <React.Fragment>

        <div className="row mt-3 mb-3">
            
            <div className="col-6">
                <h2>Women's tops</h2>
            </div>
            <div className="col-6">
                <div className="row">
                <ListGroup 
                    items={this.state.size} 
                    onSizeSelect={this.handleSizeSelect}    
                    selectedSize={this.state.selectedSize}
                />
                </div>
            </div>
        
        </div>


        <div className="row">
            <ProductBox items={products} />

        </div>
        
        </React.Fragment>

        
        )
    }
}
export default Products;

