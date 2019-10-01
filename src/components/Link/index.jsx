import React from "react";
import PropTypes from "prop-types";
import "./Link.scss";
import cnBem from "../global/bem"

const bemClass = cnBem('link');

const Link = props => {
    const {style, children, url, target, tabIndex, icon, hasBorder, borderStyle, color, title, instanceRef, isBold, isDisabled} = props;
    
    const rootClass = bemClass({
        'color': color,
        'border': hasBorder,
        'border_style': borderStyle,
        'bold': isBold ? 'bold' : ''
    });

    const iconClass = bemClass('icon', {
        'with-text': !!children,
    });

    return (
        <a style={style} className={rootClass} href={url} target={target} tabIndex={tabIndex} border={hasBorder} border_style={borderStyle} color={color} title={title} ref={instanceRef} disabled={isDisabled}>
            { icon && <span className={iconClass}> {icon} </span> }
            {children}
        </a>
    );
};

Link.propTypes = {
    instanceRef: PropTypes.func,
    color: PropTypes.oneOf(["orange", "blue"]),
    icon: PropTypes.node,
    url: PropTypes.string,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    style: PropTypes.object,
    target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
    tabIndex: PropTypes.number,
    hasBorder: PropTypes.oneOf(["orange", "blue"]),
    borderStyle: PropTypes.oneOf(["solid", "dotted", "dashed"]),
    isBold: PropTypes.bool
};
  
Link.defaultProps = {
    color: "orange",
    url: "#",
    title: "перейдите по ссылке",
    tabIndex: 0,
    target: "_self",
    isDisabled: false,
    isBold: false
};

Link.displayName = "Link";

export default Link;
