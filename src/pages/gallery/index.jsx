import React from "react";
import { Topbar, Footer } from "../../shared-components";
import ImageGallery from "react-image-gallery";
import mike1 from "../../assets/images/mike_1.jpeg";
import mike2 from "../../assets/images/mike_2.jpeg";
import mike3 from "../../assets/images/mike_3.jpeg";
import mike4 from "../../assets/images/mike_4.jpeg";
import mike5 from "../../assets/images/mike_5.jpeg";
import mike6 from "../../assets/images/mike_6.jpeg";
import mike7 from "../../assets/images/mike_7.jpeg";
import mike8 from "../../assets/images/mike_8.jpeg";
import mike9 from "../../assets/images/mike_9.jpeg";
import mike10 from "../../assets/images/mike_10.jpeg";
import mike11 from "../../assets/images/mike_11.jpeg";
import mike12 from "../../assets/images/mike_12.jpeg";
import mike13 from "../../assets/images/mike_13.jpeg";
import mike14 from "../../assets/images/mike_14.jpeg";
import mike15 from "../../assets/images/mike_15.jpeg";
import mike16 from "../../assets/images/mike_16.jpeg";
import mike17 from "../../assets/images/mike_17.jpeg";
import mike18 from "../../assets/images/mike_18.jpeg";
import mike19 from "../../assets/images/mike_19.jpeg";
import mike20 from "../../assets/images/mike_20.jpeg";
import mike21 from "../../assets/images/mike_21.jpeg";
import mike22 from "../../assets/images/mike_22.jpeg";
import mike23 from "../../assets/images/mike_23.jpeg";
import mike24 from "../../assets/images/mike_24.jpeg";

const GalleryPage = () => {
    const images = [
        {
            original: mike1,
            thumbnail: mike1,
        },
        {
            original: mike2,
            thumbnail: mike2,
        },
        {
            original: mike3,
            thumbnail: mike3,
        },
        {
            original: mike4,
            thumbnail: mike4,
        },
        {
            original: mike5,
            thumbnail: mike5,
        },
        {
            original: mike6,
            thumbnail: mike6,
        },
        {
            original: mike7,
            thumbnail: mike7,
        },
        {
            original: mike8,
            thumbnail: mike8,
        },
        {
            original: mike9,
            thumbnail: mike9,
        },
        {
            original: mike10,
            thumbnail: mike10,
        },
        {
            original: mike11,
            thumbnail: mike11,
        },
        {
            original: mike12,
            thumbnail: mike12,
        },
        {
            original: mike13,
            thumbnail: mike13,
        },
        {
            original: mike14,
            thumbnail: mike14,
        },
        {
            original: mike15,
            thumbnail: mike15,
        },
        {
            original: mike16,
            thumbnail: mike16,
        },
        {
            original: mike17,
            thumbnail: mike17,
        },
        {
            original: mike18,
            thumbnail: mike18,
        },
        {
            original: mike19,
            thumbnail: mike19,
        },
        {
            original: mike20,
            thumbnail: mike20,
        },
        {
            original: mike21,
            thumbnail: mike21,
        },
        {
            original: mike22,
            thumbnail: mike22,
        },
        {
            original: mike23,
            thumbnail: mike23,
        },
        {
            original: mike24,
            thumbnail: mike24,
        },
    ];
    return (
        <div>
            <Topbar active="gallery" />
            <div className="main-content">
                <div style={{ height: 50 }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ImageGallery items={images} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GalleryPage;
