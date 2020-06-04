import React from "react";
import PropTypes from "prop-types";
import { Topbar, Footer } from "../../shared-components";
import ImageGallery from "react-image-gallery";

const GalleryPage = () => {
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
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

GalleryPage.propTypes = {};

export default GalleryPage;
