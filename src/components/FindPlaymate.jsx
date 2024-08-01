import React, { useState } from 'react';

const FindPlaymate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    preferences: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Find Your Playmate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input 
            type="text" 
            name="fullName" 
            className="form-control"
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preferences:</label>
          <textarea 
            name="preferences" 
            className="form-control"
            value={formData.preferences} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location:</label>
          <input 
            type="text" 
            name="location" 
            className="form-control"
            value={formData.location} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FindPlaymate;
