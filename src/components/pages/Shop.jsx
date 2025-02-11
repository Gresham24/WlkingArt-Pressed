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

            <StyledShopCTA>
                Place Order on WhatsApp <FaWhatsapp />{" "}
            </StyledShopCTA>
        </StyledShopContainer>
    );
}

export default Shop;
