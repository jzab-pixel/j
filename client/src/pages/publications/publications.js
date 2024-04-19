import React, { useState } from "react";
import { Search } from 'bootstrap-icons-react';
import { FaPencilAlt } from 'react-icons/fa';
import "./publications.css"; // Import the CSS file
import defPic from '../../images/def.jpg'
import { RiDeleteBin5Fill } from "react-icons/ri";

const defDesc = "Lorem think ipsum dolor sit amet, consectetur adipiscing elit. Sed think commodo mauris, sit amet fermentum lorem dapibus at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer think ultricies ipsum in turpis pretium, id think volutpat quam venenatis. Nulla facilisi. Duis think vehicula, think tortor sit amet finibus tristique, nisi tellus eleifend mauris, ac ullamcorper sapien leo sed ex.";
const exhibitionsData = [
  { id: 1, title: "Publication 1", date: "2024-01-15", status: "current" },
  { id: 2, title: "Publication 2", date: "2024-03-10", status: "upcoming" },
  { id: 3, title: "Publication 3", date: "2023-10-01", status: "past" },
  { id: 4, title: "Publication 4", date: "2023-10-05", status: "current" },
  { id: 5, title: "Publication 5", date: "2020-10-09", status: "past"},
  { id: 6, title: "Publication 6", date: "2025-10-09", status: "upcoming"},
  { id: 7, title: "Publication 7", date: "2020-10-09", status: "past"},
  { id: 8, title: "Publication 8", date: "2020-10-09", status: "past"},
  { id: 9, title: "Publication 9", date: "2020-10-09", status: "past"},
  { id:10, title: "Publication 10", date: "2020-10-09", status: "past"},
  { id:11, title: "Publication 11", date: "2020-10-09", status: "past"},
  { id:12, title: "Publication 12", date: "2020-10-09", status: "past"},
  { id:13, title: "Publication 13", date: "2020-10-09", status: "past"},
  { id:14, title: "Publication 14", date: "2020-10-09", status: "past"},
  { id:15, title: "Publication 15", date: "2020-10-09", status: "past"},
  { id:16, title: "Publication 16", date: "2020-10-09", status: "past"},
  { id:17, title: "Publication 17", date: "2020-10-09", status: "past"},
  { id:18, title: "Publication 18", date: "2020-10-09", status: "past"}

  // Add more exhibition data as needed
];

const ExhibitionCard = ({ title, date, status }) => (
  <div className="card">
    <h3>{title}</h3>
    {/* <img  src={defPic} className="exhibitionsPic"/> */}
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
    <div id="publicationsPage">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search publications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          < Search/>
        </button>
  
        <button onClick={handleResetSearch}>
          < RiDeleteBin5Fill  />
        </button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => showAllExhibitions()}>All</button>
        <button onClick={() => filterExhibitions("current")}>Current</button>
        <button onClick={() => filterExhibitions("upcoming")}>Upcoming</button>
        <button onClick={() => filterExhibitions("past")}>Past</button>
      </div>

      <div className="gallery">
      <ExhibitionGallery exhibitions={filteredExhibitions} />
      </div>
    </div>
  );
};

export default Publications;
