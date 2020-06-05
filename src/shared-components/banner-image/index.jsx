import "./index.scss";
import React from "react";
import bannerImage from "../../assets/images/banner_image.png";

const BannerImageComponent = () => {
    return (
        <div id="banner-image-div">
            <img src={bannerImage} alt="Banner" />
        </div>
    );
};

export const BannerImage = BannerImageComponent;
