import React from "react";
import PropTypes from "prop-types";
import { Topbar, BannerImage, Footer } from "../../shared-components";

const AnnouncementsPage = () => {
    return (
        <div>
            <Topbar active="announcements" />
            <BannerImage />
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h4>ANNOUNCEMENTS</h4>
                            <br />
                        </div>
                        <div className="col-md-7">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <br />
                                <br />
                                Aenean iaculis augue vitae leo rhoncus, ac ultrices augue consequat. Mauris mauris purus, scelerisque in orci at,
                                fringilla volutpat libero.
                                <br />
                                <br />
                                Quisque ante nibh, interdum quis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

AnnouncementsPage.propTypes = {};

export default AnnouncementsPage;
