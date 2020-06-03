import React, { useState } from "react";
import PropTypes from "prop-types";
import { Topbar, BannerImage, Footer } from "../../shared-components";

const GuestbookComponent = () => {
    const [name, setName] = useState();
    const [relation, setRelation] = useState();
    const [content, setContent] = useState();
    const [contact, setContact] = useState();

    return (
        <div>
            <Topbar active="guest-book" />
            <BannerImage />
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h3>GUEST BOOK</h3>
                            <br />
                        </div>
                        <div className="col-md-7">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
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
                                    <label>Relation</label>
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
                                    <label>Tribute</label>
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
                                <button type="button" class="btn btn-dark btn-block">
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

export default GuestbookComponent;
