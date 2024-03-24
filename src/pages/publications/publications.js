import React, { useState } from "react";
import { Search } from 'bootstrap-icons-react';
import { FaPencilAlt } from 'react-icons/fa';
import "./publications.css"; // Import the CSS file
import defPic from '../../images/def.jpg'
const defDesc = "Lorem think ipsum dolor sit amet, consectetur adipiscing elit. Sed think commodo mauris, sit amet fermentum lorem dapibus at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer think ultricies ipsum in turpis pretium, id think volutpat quam venenatis. Nulla facilisi. Duis think vehicula, think tortor sit amet finibus tristique, nisi tellus eleifend mauris, ac ullamcorper sapien leo sed ex.";
const exhibitionsData = [
  { id: 1, title: "Exhibition 1", date: "2024-01-15", status: "current" },
  { id: 2, title: "Exhibition 2", date: "2024-03-10", status: "upcoming" },
  { id: 3, title: "Exhibition 3", date: "2023-10-01", status: "past" },
  { id: 4, title: "Exhibition 4", date: "2023-10-05", status: "current" },
  { id: 5, title: "Exhibition 5", date: "2020-10-09", status: "past"},
  { id: 6, title: "Exhibition 6", date: "2025-10-09", status: "upcoming"},
  { id: 7, title: "Exhibition 7", date: "2020-10-09", status: "past"},
  { id: 8, title: "Exhibition 8", date: "2020-10-09", status: "past"}

  // Add more exhibition data as needed
];

const ExhibitionCard = ({ title, date, status }) => (
  <div className="card">
    <h3>{title}</h3>
    <img  src={defPic} className="exhibitionsPic"/>
    <p><strong>Date:</strong> {date}</p>
    <p><strong>Status:</strong> {status}</p>
    <p><strong>Description:</strong> {defDesc}</p>
  </div>
);

const ExhibitionGallery = ({ exhibitions }) => (
  <div className="gallery">
    {exhibitions.map((exhibition) => (
      <ExhibitionCard key={exhibition.id} {...exhibition}/>
    ))}
  </div>
);

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExhibitions, setFilteredExhibitions] = useState(exhibitionsData);

  const handleSearch = () => {
    const filtered = exhibitionsData.filter(
      (exhibition) => exhibition.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExhibitions(filtered);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setFilteredExhibitions(exhibitionsData);
  };

  const filterExhibitions = (status) => {
    const filtered = exhibitionsData.filter((exhibition) => exhibition.status === status);
    setFilteredExhibitions(filtered);
  };

  const showAllExhibitions = () => {
    setFilteredExhibitions(exhibitionsData); 
  }

  return (
    <div className="galleryContainer">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search exhibitions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          < Search/>
        </button>
  
        <button onClick={handleResetSearch}>
          <FaPencilAlt />
        </button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => showAllExhibitions()}>All</button>
        <button onClick={() => filterExhibitions("current")}>Current</button>
        <button onClick={() => filterExhibitions("upcoming")}>Upcoming</button>
        <button onClick={() => filterExhibitions("past")}>Past</button>
      </div>

      <ExhibitionGallery exhibitions={filteredExhibitions} />
    </div>
  );
};

export default Publications;
