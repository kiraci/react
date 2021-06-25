import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { saveProduct } from '../../redux/actions/productActions';
import { getCategories } from '../../redux/actions/categoryActions';
import ProductDetails from './ProductDetails';

const AddOrUpdateProduct = ({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) => {

    const [product, setProduct] = useState({ ...props.product });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product });
    }, [props.product]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]:name === "categoryId" ? parseInt(value, 10) : value
        }));

        validate(name, value);
    }

    const validate = (name, value) => {
        if(name === "productName" && value === ""){
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: "This must be name of an item.",
            }));
        }else{
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: ""
            }));
        }

        if(name === "categoryId" && value === ""){
            setErrors(previousErrors => ({
                ...previousErrors,
                categoryId: "This must be category name.",
            }));
        }else{
            setErrors(previousErrors => ({
                ...previousErrors,
                categoryId: ""
            }));
        }

        if(name === "unitPrice" && value === ""){
            setErrors(previousErrors => ({
                ...previousErrors,
                unitPrice: "This must be price of unit"
            }));
        }else{
            setErrors(previousErrors => ({
                ...previousErrors,
                unitPrice: ""
            }));
        }

        if(name === "quantityPerUnit" && value === ""){
            setErrors(previousErrors => ({
                ...previousErrors,
                quantityPerUnit: "This must be the quantity of a unit"
            }));
        }else{
            setErrors(previousErrors => ({
                ...previousErrors,
                quantityPerUnit: ""
            }));
        }

        if(name === "unitsInStock" && value === ""){
            setErrors(previousErrors => ({
                ...previousErrors,
                unitsInStock: "This must be units in stock."
            }));
        }else{
            setErrors(previousErrors => ({
                ...previousErrors,
                unitsInStock: ""
            }));
        }
    }

    const handleSave = (event) => {
        event.preventDefault();

        saveProduct(product).then(() => {
            history.push("/");
        });
    }

    return (
        <ProductDetails
            product={product} 
            categories={categories} 
            onChange={handleChange} 
            onSave={handleSave}
            errors={errors} 
        />
    )

}

const getProductById = (products, productId) => {
    let product = products.find(product => product.id == productId) || null;
    return product;
}

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    const product = productId && state.productListReducer.length > 0
        ? getProductById(state.productListReducer, productId)
        : {};
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories,
    saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)