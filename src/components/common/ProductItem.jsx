import {
    ProductItemContainer,
    ImageContainer,
    ProductImage,
    ProductName,
    ProductDesc,
    ProductPrice,
} from "../../styles/ProductItem.styles";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ imageUrl, name, desc, price }) => {
    return (
        <ProductItemContainer>
            <ImageContainer>
                <ProductImage src={imageUrl} alt={name} />
            </ImageContainer>
            <ProductName>{name}</ProductName>
            <ProductDesc>{desc}</ProductDesc>
            <ProductPrice>{price}</ProductPrice>
        </ProductItemContainer>
    );
};

export default ProductItem;
