import React, { useState } from "react";
import './admin.css'

const Admin = () => {
    const [publicationName, setPublicationName] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [publicationDescription, setPublicationDescription] = useState("");
    const [publicationPicture, setPublicationPicture] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log("Publication Name:", publicationName);
        console.log("Publication Date:", publicationDate);
        console.log("Publication Description:", publicationDescription);
        console.log("Publication Picture:", publicationPicture);
    };

    return (
        <div id="adminPage">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="publicationName">Publication Name:</label>
                    <input
                        type="text"
                        id="publicationName"
                        value={publicationName}
                        onChange={(e) => setPublicationName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="publicationDate">Publication Date:</label>
                    <input
                        type="date"
                        id="publicationDate"
                        value={publicationDate}
                        onChange={(e) => setPublicationDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="publicationDescription">Publication Description:</label>
                    <textarea
                        id="publicationDescription"
                        value={publicationDescription}
                        onChange={(e) => setPublicationDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="publicationPicture">Publication Picture:</label>
                    <input
                        type="file"
                        id="publicationPicture"
                        accept="image/*"
                        onChange={(e) => setPublicationPicture(e.target.files[0])}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Admin;
