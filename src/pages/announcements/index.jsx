import React from "react";
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
                                PRIVATE BURIAL
                                <br />
                                <br />
                                DATE: FRIDAY 19TH JUNE, 2020
                                <br />
                                TIME: 10:00AM – 11:30AM GMT
                                <br />
                                VENUE: TRANSITIONS FUNERAL HOME – HAATSO
                                <br />
                                <br />
                                LIVE STREAMING WILL BE PROVIDED BY TRANSITIONS FUNERAL HOME
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AnnouncementsPage;
