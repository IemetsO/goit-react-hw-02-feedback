import PropTypes from 'prop-types';
import React from "react";
import "./Section.css"

const Section = ({title, children}) =>{
    return(
        <section className="section">
            <h2>{title}</h2>
            {children}
        </section>
    )
} 

export default Section

Section.propTypes = {
title: PropTypes.string,
}