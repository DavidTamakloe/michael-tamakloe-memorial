import "./index.scss";
import React from "react";

const FooterComponent = () => {
    return (
        <div id="footer-div">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h6>APPRECIATION</h6>
                        <p>
                            The family of the late Michael Tamakloe would like to express our sincerest appreciation for your love and support during
                            this time of mourning. <br /> Thank you, and God bless you.
                        </p>
                        <br />
                    </div>
                    {/* <div className="col-md-6">
                        <h6>CONTACT</h6>
                        <p>
                            Person 1 : +233 244 111 111
                            <br />
                            Person 2 : +233 244 222 222
                            <br />
                            Person 3 : +233 244 333 333
                            <br />
                            Person 4 : +233 244 444 444
                            <br />
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export const Footer = FooterComponent;
