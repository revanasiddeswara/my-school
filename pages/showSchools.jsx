import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import Header from "./Header"; // Adjust the import path based on your project structure
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getSchools"
        );
        setSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchools();
  }, []);

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <section className="section">
        <h1 className="text-4xl font-bold text-center mt-8 mb-4" style={{ fontSize: '50px' }}>All Schools </h1>
        <p className="text-center text-gray-500 mb-8">
          Find the right school for your child.
        </p>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder=" School Name..."
            className="p-4 border border-gray-300 rounded-l search-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className=" bg-green-500 text-white rounded-r submit-btn">
            Search
          </button>
        </div>
        <div className="container">
          <div className="box">
            <div className="school-grid">
              {filteredSchools.map((school) => (
                <div key={school.id} className="school-card">
                  <div className="relative">
                    <img src={school.image} alt={school.name} className="rounded-t-lg" />
                    <div className="absolute top-2 right-2 p-0 rounded-full shadow-lg plus-icon">
                      <img src="https://uniformapp.in/images/plus.svg" alt="Plus Icon" className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                      <small>{school.city}</small>
                      <small>{school.board}</small>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 truncate">{school.name}</h2>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed">{school.address}</p>
                  </div>
                  <div className="apply-now-btn">
                    Apply Now
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
