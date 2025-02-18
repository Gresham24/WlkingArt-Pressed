import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import ProductItem from "../common/ProductItem";
import pinkSwirl from "../../assets/pink-nails.jpeg";
import loveBites from "../../assets/Love-bite-nails.jpeg";
import cheetahGirl from "../../assets/cheatah-print-nails.jpeg";
import backheadNails from "../../assets/backhead-nails.jpg";
import {
    StyledShopContainer,
    StyledH1,
    StyledShopCTA,
    StyledSwiper,
} from "../../styles/Shop.styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Shop() {
    const [activeProduct, setActiveProduct] = useState(null);
    const products = [
        {
            imageUrl: `${cheetahGirl}`,
            name: "Cheetah Girl",
            desc: "Plantain",
            price: "ZAR 2,500",
        },
        {
            imageUrl: `${pinkSwirl}`,
            name: "Pink Swirl",
            desc: "Almond",
            price: "ZAR 2,000",
        },
        {
            imageUrl: `${cheetahGirl}`,
            name: "Panther",
            desc: "Plantain",
            price: "ZAR 2,500",
        },
        {
            imageUrl: `${loveBites}`,
            name: "Love Bites",
            desc: "Stiletto",
            price: "ZAR 1,500",
        },

        {
            imageUrl: `${cheetahGirl}`,
            name: "Cheater",
            desc: "Plantain",
            price: "ZAR 2,500",
        },
        {
            imageUrl: `${loveBites}`,
            name: "LoveBitten",
            desc: "Stiletto",
            price: "ZAR 1,500",
        },
    ];

    // Set initial active product
    useState(() => {
        setActiveProduct(products[0]);
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "+27717091239";

        // Create a custom message with active product details
        const message = activeProduct
            ? `Hi! I'm interested in ordering the ${activeProduct.name} press-on nails (${activeProduct.desc} shape) for ${activeProduct.price} from WlkingArt Pressed.`
            : "Hi! I'm interested in ordering press-on nails from WlkingArt Pressed.";

        // Create the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");
    };

    const handleSlideChange = (swiper) => {
        // Get the active slide index, accounting for loop
        const realIndex = swiper.realIndex;
        setActiveProduct(products[realIndex]);
    };

    return (
        <StyledShopContainer $backgroundImage={backheadNails}>
            <StyledH1>Shop The Collection</StyledH1>
            <div>
                <StyledSwiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    onSlideChange={handleSlideChange}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.name}>
                            <ProductItem
                                imageUrl={product.imageUrl}
                                name={product.name}
                                desc={product.desc}
                                price={product.price}
                            />
                        </SwiperSlide>
                    ))}
                </StyledSwiper>
            </div>

            <StyledShopCTA onClick={handleWhatsAppClick}>
                Order {activeProduct?.name} on WhatsApp <FaWhatsapp />
            </StyledShopCTA>
        </StyledShopContainer>
    );
}

export default Shop;
