import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class CategoryList extends Component{

    state = {
        categories: []
    };

    componentDidMount(){
        this.getCategories();
    };

    getCategories = () => {
        fetch("http://localhost:3000/categories")
        .then( response => response.json() )
        .then( data => this.setState({categories:data}));
    };

    render(){
        return (
            <div>
                <ListGroup>
                    {this.state.categories.map(
                        category => (
                            <ListGroupItem 
                                key={category.id}
                                active={this.props.currentCategory === category.categoryName ? true : false}
                                onClick={ () => {this.props.changeCategory(category); } }
                                >
                                {category.categoryName}
                                
                            </ListGroupItem>
                        )
                    )}
                </ListGroup>
            </div>
        )
    }

}

export default CategoryList;