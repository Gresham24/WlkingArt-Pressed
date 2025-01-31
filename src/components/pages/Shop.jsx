import { FaWhatsapp } from "react-icons/fa";
import ProductItem from "../common/ProductItem";
import backgroundImg from "../../assets/backhead-nails.jpg";
import pinkSwirl from "../../assets/pink-nails.jpeg";
import loveBites from "../../assets/Love-bite-nails.jpeg";
import cheetahGirl from "../../assets/cheatah-print-nails.jpeg";
import {
    StyledShopContainer,
    StyledBackgroundImg,
    StyledH1,
    StyledShopCTA,
} from "../../styles/Shop.styles";

function Shop() {
    const products = [
        {
            imageUrl: `${pinkSwirl}`,
            name: "Pink Swirl",
            desc: "Almond",
            price: "ZAR 2,000",
        },
        {
            imageUrl: `${loveBites}`,
            name: "Love Bites",
            desc: "Stiletto",
            price: "ZAR 1,500",
        },
        {
            imageUrl: `${cheetahGirl}`,
            name: "Cheetah Girl",
            desc: "Plantain",
            price: "ZAR 2,500",
        },
    ];

    return (
        <StyledShopContainer>
            <StyledBackgroundImg
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "80vh",
                    color: "white",
                }}
            ></StyledBackgroundImg>

            <StyledH1>Shop The Collection</StyledH1>

            {/* Product items container */}
            <div style={styles.productsContainer}>
                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        desc={product.desc}
                        price={product.price}
                    />
                ))}
            </div>

            <StyledShopCTA>
                Place Order on WhatsApp <FaWhatsapp />{" "}
            </StyledShopCTA>
        </StyledShopContainer>
    );
}

const styles = {
    productsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
        padding: "16px",
    },
};

export default Shop;
