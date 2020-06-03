import "./tribute-item.scss";
import React from "react";
import PropTypes from "prop-types";

const TributeItemComponent = ({ date, content, name }) => {
    return (
        <div className="tribute-item">
            <p className="date-text">{date}</p>
            <p className="content-text">{content}</p>
            <p className="name-text">{name}</p>
        </div>
    );
};

TributeItemComponent.propTypes = {};

export default TributeItemComponent;
