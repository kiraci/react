import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

class CartList extends Component{
    renderCart(){
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
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
                                <tr key={item.id}>
                                    <th scope="row">{index}</th>
                                    <td>{item.product.categoryID}</td>
                                    <td>{item.product.productName}</td>
                                    <td>{item.product.unitPrice}</td>
                                    <td>{item.product.unitsInStock}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Button 
                                            color="danger" 
                                            onClick={() => this.props.removeFromCart(item.product)}
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

export default CartList;