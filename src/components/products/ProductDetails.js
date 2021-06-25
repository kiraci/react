import React from 'react'
import TextInput from '../toolbox/TextInput'
import SelectInput from '../toolbox/SelectInput'

const ProductDetails = ({
    categories,
    product,
    onSave,
    onChange,
    errors
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update" : "Add"}</h2>
            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error={errors.productName}
            />
            <SelectInput
                name="categoryId"
                label="Category"
                onChange={onChange}
                defaultOption="Select"
                value={product.categoryId || ""}
                error={errors.categoryId}
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
            />
            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error={errors.unitPrice}
            />
            <TextInput
                name="quantitiyPerUnit"
                label="Quantitiy Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error={errors.quantityPerUnit}
            />
            <TextInput
                name="unitsInStock"
                label="Units In Stock"
                value={product.unitsInStock}
                onChange={onChange}
                error={errors.unitsInStock}
            />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
}

export default ProductDetails