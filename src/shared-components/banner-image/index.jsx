import "./index.scss";
import React from "react";
import PropTypes from "prop-types";
import bannerImage from "../../assets/images/banner_image.png";

const BannerImageComponent = () => {
    return (
        <div id="banner-image-div">
            <img src={bannerImage} alt="Banner" />
        </div>
    );
};

BannerImageComponent.propTypes = {};

export const BannerImage = BannerImageComponent;
