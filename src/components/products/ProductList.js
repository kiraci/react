import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as productActions from '../../redux/actions/productActions'
import { bindActionCreators } from 'redux'
import { Table, Button } from 'reactstrap' 
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

class ProductList extends Component {

    componentDidMount(){
        this.props.actions.getProducts();
    }

    addToCart = (product) => {
        this.props.actions.addToCart({product, quantity: 1});
        alertify.success(product.productName + " has been added to cart!", 2);
    }

    render() {
        return (
            <div>
                <h3>Products</h3>
                {
                    this.props.currentCategory.categoryName ?
                        (<p className="btn-success w-25 rounded p-3">{this.props.currentCategory.categoryName}</p>)
                        : (<div></div>)
                }
                <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Units In Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.products.map(
                            (product, index) => (
                                <tr key={product.id}>
                                    <th scope="row">{index}</th>
                                    <td><Link to={"/saveProduct/"+product.id}>{product.productName}</Link></td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button onClick={ () => this.addToCart(product)} color="info">Add to Cart!</Button>
                                    </td>
                                </tr>
                            )
                        )}
                </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        currentCategory: state.changeCategoryReducer, 
        products: state.productListReducer,
    }
}

function mapDispatchToProps(dispatch){
    return {actions: 
        {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
