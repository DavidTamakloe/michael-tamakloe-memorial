import React, { useEffect, useState } from "react";
import { Topbar, BannerImage, Footer } from "../../shared-components";
import TributeItem from "./tribute-item";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

const TributesPage = () => {
    const [tributes, setTributes] = useState([]);
    useEffect(() => {
        async function fetchTributes() {
            const response = await axios.get(".netlify/functions/fetch-tributes");
            console.log(response.data);
            setTributes(response.data.allTributes.data);
        }
        fetchTributes();
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
                            <p>
                                To add a tribute, please go to the <Link to="/book-of-condolences">Book of Condolences Page</Link>.
                            </p>
                        </div>
                        <div className="col-md-7">
                            {tributes.map((tribute) => {
                                return (
                                    <TributeItem
                                        key={tribute._id}
                                        date={moment(tribute.date).format("DD MMM YYYY")}
                                        content={tribute.content}
                                        name={`${tribute.name} (${tribute.relation})`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TributesPage;
