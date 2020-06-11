import "./index.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopbarComponent = ({ active }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <div id="topbar-fixed" className="d-none d-md-block">
                <ul>
                    <li className={active === "biography" ? "active" : ""}>
                        <Link to="/biography">Biography</Link>
                    </li>
                    <li className={active === "tributes" ? "active" : ""}>
                        <Link to="/tributes">Tributes</Link>
                    </li>
                    <li className={active === "book-of-condolences" ? "active" : ""}>
                        <Link to="/book-of-condolences">Book of Condolences</Link>
                    </li>
                    <li className={active === "gallery" ? "active" : ""}>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className={active === "announcements" ? "active" : ""}>
                        <Link to="/announcements">Announcements</Link>
                    </li>
                </ul>
            </div>
            <div
                id="mobile-topbar-fixed"
                className="d-md-none"
                onClick={() => {
                    setExpanded(!expanded);
                }}
            >
                <p className="menu-header">{active.split("-").join(" ")}</p>
                <span className="toggle-menu-icon">{expanded ? <i className="icon-close"></i> : <i className="icon-menu"></i>}</span>
                {expanded && (
                    <div className="menu-div">
                        <ul>
                            <li>
                                <Link to="/biography">Biography</Link>
                            </li>
                            <li>
                                <Link to="/tributes">Tributes</Link>
                            </li>
                            <li>
                                <Link to="/book-of-condolences">Book of Condolences</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/announcements">Announcements</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export const Topbar = TopbarComponent;
