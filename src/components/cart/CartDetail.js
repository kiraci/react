import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'
import { Table, Button } from 'reactstrap'
import alertify from 'alertifyjs'

class CartDetail extends Component{

    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " has been removed.", 2);
    }

    renderCart(){
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.cart.map(
                            (item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.product.categoryID}</td>
                                    <td>{item.product.productName}</td>
                                    <td>{item.product.unitPrice}</td>
                                    <td>{item.product.unitsInStock}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Button 
                                            color="danger" 
                                            onClick={() => this.removeFromCart(item.product)}
                                        >Remove</Button>
                                    </td>
                                </tr>
                            )
                        )}
                </tbody>
            </Table>
        );
    }

    render(){
        return (
            <div>
                {this.renderCart()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions:
        {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)