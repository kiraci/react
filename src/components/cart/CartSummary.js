import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import { connect } from 'react-redux'
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

class CartSummary extends Component {

    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " has been removed.", 2);
    }

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
                                <Badge color="danger" onClick={() => this.removeFromCart(item.product)}>Remove</Badge>
                                {item.product.productName}
                                <Badge>{item.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="/cart">
                            Go to Cart!
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Empty Basket</NavLink>
            </NavItem>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)