import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Topbar, BannerImage, Footer } from "../../shared-components";
import TributeItem from "./tribute-item";

const TributesPage = () => {
    // const [tributes, setTributes] = useState([])
    useEffect(() => {
        fetch(`/.netlify/functions/fetch-tributes`).then((response) => {
            console.log("response of fetch tributes");
            console.log(response);
            // setTributes(response)
        });
    }, []);
    return (
        <div>
            <Topbar active="tributes" />
            <BannerImage />
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h4>TRIBUTES</h4>
                        </div>
                        <div className="col-md-7">
                            <TributeItem
                                date={"12 May 2020"}
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis augue vitae leo rhoncus, ac ultrices augue
                            consequat. Mauris mauris purus."
                                name="Person 1 (Classmate)"
                            />
                            <TributeItem
                                date={"12 May 2020"}
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis augue vitae leo rhoncus, ac ultrices augue
                            consequat. Mauris mauris purus."
                                name="Person 1 (Classmate)"
                            />
                            <TributeItem
                                date={"12 May 2020"}
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis augue vitae leo rhoncus, ac ultrices augue
                            consequat. Mauris mauris purus."
                                name="Person 1 (Classmate)"
                            />
                            <TributeItem
                                date={"12 May 2020"}
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis augue vitae leo rhoncus, ac ultrices augue
                            consequat. Mauris mauris purus."
                                name="Person 1 (Classmate)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

TributesPage.propTypes = {};

export default TributesPage;
