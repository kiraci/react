import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class ProductList extends Component{

    render(){
        return (
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
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button onClick={ () => this.props.addToCart(product)} color="info">Add to Cart!</Button>
                                    </td>
                                </tr>
                            )
                        )}
                </tbody>
                </Table>
        );
    }
}

export default ProductList