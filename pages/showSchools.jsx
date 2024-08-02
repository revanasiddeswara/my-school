import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Header from "./Header";
import Footer from "./footer";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get("/api/getSchools"); // Use relative URL
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
        <h1 className="text-4xl font-bold text-center mt-8 mb-4" style={{ fontSize: '50px' }}>All Schools</h1>
        <p className="text-center text-gray-500 mb-8">
          Find the right school for your child.
        </p>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="School Name..."
            className="p-4 border border-gray-300 rounded-l search-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="submit-btn">
            Search
          </button>
        </div>
        <div className="container">
          <div className="box">
            <div className="school-grid">
              {filteredSchools.length === 0 ? (
                <p className="text-center text-gray-500">No schools to show</p>
              ) : (
                filteredSchools.map((school) => (
                  <div key={school.id} className="school-card">
                    <div className="relative">
                      <Image 
                        src={school.image} 
                        alt={school.name} 
                        layout="responsive" 
                        width={500} 
                        height={300} 
                        className="rounded-t-lg" 
                      />
                      <div className="absolute top-2 right-2 p-0 rounded-full shadow-lg plus-icon">
                        <Image 
                          src="https://uniformapp.in/images/plus.svg" 
                          alt="Plus Icon" 
                          width={32} 
                          height={32} 
                        />
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
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
