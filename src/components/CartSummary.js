import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavLink,
    NavItem,
} from 'reactstrap';

class CartSummary extends Component {

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="ml-5">
                    Quantity - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>

                    {
                        this.props.cart.map(item => (
                            <DropdownItem key={item.product.id}>
                                <Badge color="danger" onClick={() => { console.log(this.props); this.props.removeFromCart(item.product); }}>Remove</Badge>
                                {item.product.productName}
                                <Badge>{item.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="/cart"> Go to Cart! </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink>
                    Empty Card
                </NavLink>
            </NavItem>
        );
    }

    render() {

        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        );
    }
}

export default CartSummary;