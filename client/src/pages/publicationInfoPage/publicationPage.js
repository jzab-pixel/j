import React from "react";
import './publicationPage.css';
import { Link } from "react-router-dom";

const PublicationPage = () => {
    return (
        <div id="pubPage">
            <div id="pubBox">
                <h4>
                    IF YOU WANT TO REVIEW PUBLICATIONS <Link to="/publications">CLICK HERE!</Link>
                </h4>
            </div>
        </div>
    );
};

export default PublicationPage;
