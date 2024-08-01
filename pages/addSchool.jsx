import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import Header from './Header';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getSchools');
        setSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchools();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    formData.append('image', data.image[0]);

    try {
      const response = await axios.post('http://localhost:5000/api/addSchool', formData);
      alert(response.data.message);
      // Optionally refetch schools after adding a new one
      fetchSchools();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>        <Header />
      <h1 className="text-4xl font-bold text-center mt-8" style={{ fontSize: '50px', fontFamily: 'Open Sans' }}>ADD YOUR SCHOOL HERE</h1>
      <section className="section">
      <div className="container">
      <div className="box">

      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <input {...register('name', { required: true })} placeholder="School Name" className="w-full p-2 border border-gray-300 rounded" />
            {errors.name && <p className="text-red-500">Name is required.</p>}
          </div>

          <div>
            <input {...register('address', { required: true })} placeholder="Address" className="w-full p-2 border border-gray-300 rounded" />
            {errors.address && <p className="text-red-500">Address is required.</p>}
          </div>

          <div>
            <input {...register('city', { required: true })} placeholder="City" className="w-full p-2 border border-gray-300 rounded" />
            {errors.city && <p className="text-red-500">City is required.</p>}
          </div>

          <div>
            <input {...register('state', { required: true })} placeholder="State" className="w-full p-2 border border-gray-300 rounded" />
            {errors.state && <p className="text-red-500">State is required.</p>}
          </div>

          <div>
            <input {...register('contact', { required: true })} placeholder="Contact" type="tel" className="w-full p-2 border border-gray-300 rounded" />
            {errors.contact && <p className="text-red-500">Contact is required.</p>}
          </div>

          <div>
            <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" type="email" className="w-full p-2 border border-gray-300 rounded" />
            {errors.email_id && <p className="text-red-500">Valid email is required.</p>}
          </div>

          <div>
            <input {...register('image', { required: true })} type="file" className="w-full p-2 border border-gray-300 rounded" />
            {errors.image && <p className="text-red-500">Image is required.</p>}
          </div>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Add School</button>
      </form>
        </div>
        </div>
        </section>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map(school => (
          <div key={school.id} className="school-card border rounded-lg overflow-hidden shadow-lg">
            <img src={school.image} alt={school.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{school.city}</span>
                <span className="text-sm text-gray-600">{school.board}</span>
              </div>
              <h2 className="text-xl font-semibold mt-2">{school.name}</h2>
              <p className="text-gray-600">{school.address}</p>
              <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Apply Now</button>
            </div>
          </div>
        ))}
      </div> */}
    </div>

  );
}
