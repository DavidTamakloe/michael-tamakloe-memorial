import React from "react";
import { Topbar, Footer } from "../../shared-components";
import ImageGallery from "react-image-gallery";
import mike1 from "../../assets/images/mike_1.jpeg";
import mike2 from "../../assets/images/mike_2.jpeg";
import mike3 from "../../assets/images/mike_3.jpeg";
import mike4 from "../../assets/images/mike_4.jpeg";
import mike5 from "../../assets/images/mike_5.jpeg";
import mike6 from "../../assets/images/mike_6.jpeg";

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
