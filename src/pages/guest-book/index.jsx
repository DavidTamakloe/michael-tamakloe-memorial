import React, { useState } from "react";
import PropTypes from "prop-types";
import { Topbar, BannerImage, Footer } from "../../shared-components";
import { withRouter } from "react-router-dom";
import axios from "axios";

const GuestbookComponent = ({ history }) => {
    const [name, setName] = useState();
    const [relation, setRelation] = useState();
    const [content, setContent] = useState();
    const [contact, setContact] = useState();

    const onSubmit = (e) => {
        console.log("submitting");
        e.preventDefault();
        axios
            .post("/.netlify/functions/create-tribute", {
                name,
                relation,
                content,
                contact,
            })
            .then((response) => {
                if (response.status === 200) {
                    history.push("/tributes");
                }
            });
    };

    return (
        <div>
            <Topbar active="guest-book" />
            <BannerImage />
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h4>GUEST BOOK</h4>
                            <p>To add a tribute please fill in the form. Your tribute will be displayed on the "Tributes" page.</p>
                            <br />
                        </div>
                        <div className="col-md-7">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        className="form-control"
                                        value={name}
                                        required
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Your Relation To Michael</label>
                                    <input
                                        className="form-control"
                                        value={relation}
                                        required
                                        onChange={(e) => {
                                            setRelation(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Contact (Optional)</label>
                                    <input
                                        className="form-control"
                                        value={contact}
                                        required
                                        onChange={(e) => {
                                            setContact(e.target.value);
                                        }}
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Your Tribute</label>
                                    <textarea
                                        className="form-control"
                                        rows="10"
                                        value={content}
                                        onChange={(e) => {
                                            setContent(e.target.value);
                                        }}
                                    ></textarea>
                                    <br />
                                </div>
                                <button type="submit" className="btn btn-dark btn-block">
                                    SUBMIT TRIBUTE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

GuestbookComponent.propTypes = {};

export default withRouter(GuestbookComponent);
