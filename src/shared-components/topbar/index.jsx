import "./index.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopbarComponent = ({ active }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <div id="topbar-fixed" className="d-none d-md-block">
                <ul>
                    <li>
                        <Link to="/biography">Biography</Link>
                    </li>
                    <li>
                        <Link to="/tributes">Tributes</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/announcements">Announcements</Link>
                    </li>
                </ul>
            </div>
            <div id="mobile-topbar-fixed" className="d-md-none">
                <p className="menu-header">{active}</p>
                <span
                    className="toggle-menu-icon"
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    {expanded ? <icon className="icon-close"></icon> : <icon className="icon-menu"></icon>}
                </span>
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

TopbarComponent.propTypes = {
    active: PropTypes.string,
};

export const Topbar = TopbarComponent;
