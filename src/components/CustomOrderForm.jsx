import React, { useState } from 'react';

const CustomOrderForm = ({ onSubmit, formData, handleChange }) => {

  console.log("IN CustomOrderForm -- formData: ", formData)
  return (
    <form onSubmit={onSubmit} className="p-4 border rounded bg-light">
  
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="ageGroup" className="form-label">
          Age Group
        </label>
        <select
          className="form-select"
          id="ageGroup"
          name="ageGroup"
          value={formData.ageGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select Age Group</option>
          <option value="kids">Kids</option>
          <option value="teens">Teens</option>
          <option value="adults">Adults</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="skillLevel" className="form-label">
          Skill Level
        </label>
        <select
          className="form-select"
          id="skillLevel"
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          required
        >
          <option value="">Select Skill Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <select
          className="form-select"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">Select Subject</option>
          <option value="history">History</option>
          <option value="geography">Geography</option>
          <option value="math">Math</option>
          <option value="english">English</option>
          <option value="literature">Literature</option>
          <option value="social_skills">Social Skills</option>
          <option value="relationships">Relationships</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      {formData.subject === 'other' && (
        <div className="mb-3">
          <label htmlFor="customSubject" className="form-label">
            Custom Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="customSubject"
            name="customSubject"
            value={formData.customSubject}
            onChange={handleChange}
            placeholder="Enter custom subject"
            required
          />
        </div>
      )}

      <button type="submit" className="btn btn-primary">
        Get me my game - the one that fulfills my needs perfectly!
      </button>
    </form>
  );
};

export default CustomOrderForm;
