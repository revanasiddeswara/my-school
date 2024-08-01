import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import Header from "./Header"; // Adjust the import path based on your project structure
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const handleAddSchool = () => {
    navigate("/addSchool");
  };

  return (
    <div>
      <Header />
      <section className="section">
        <h1 className="text-4xl font-bold text-center mt-8">School Search</h1>
        <p className="text-center mb-8">
          Find the right school for your child.
        </p>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="School Name..."
            className="p-2 border border-gray-300 rounded-l"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="p-2 bg-green-500 text-white rounded-r">
            Search
          </button>
        </div>
        <div className="container">
          <div className="box">
            {filteredSchools.length > 0 ? (
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
            ) : (
              <div className="text-center">
                <p className="text-xl text-gray-700 mb-4">No schools added</p>
                <button
                  onClick={handleAddSchool}
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Add School
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
