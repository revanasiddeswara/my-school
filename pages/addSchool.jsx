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
        const response = await axios.post('http://127.0.0.1:5000/api/addSchool', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8" style={{ fontFamily: 'Open Sans' }}>ADD YOUR SCHOOL HERE</h1>
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="box p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="mb-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <input {...register('name', { required: true })} placeholder="School Name" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {errors.name && <p className="text-red-500 mt-2">Name is required.</p>}
                </div>

                <div>
                  <input {...register('address', { required: true })} placeholder="Address" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {errors.address && <p className="text-red-500 mt-2">Address is required.</p>}
                </div>

                <div>
                  <input {...register('city', { required: true })} placeholder="City" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {errors.city && <p className="text-red-500 mt-2">City is required.</p>}
                </div>

                <div>
                  <input {...register('state', { required: true })} placeholder="State" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {errors.state && <p className="text-red-500 mt-2">State is required.</p>}
                </div>

                <div>
                  <input {...register('contact', { required: true })} placeholder="Contact" type="tel" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {errors.contact && <p className="text-red-500 mt-2">Contact is required.</p>}
                </div>

                <div>
                  <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" type="email" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {errors.email_id && <p className="text-red-500 mt-2">Valid email is required.</p>}
                </div>

                <div>
                  <input {...register('image', { required: true })} type="file" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {errors.image && <p className="text-red-500 mt-2">Image is required.</p>}
                </div>
              </div>
              <button type="submit" className="bg-green-500 text-white px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Add School</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
