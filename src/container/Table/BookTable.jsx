import React, { useState } from 'react';
import './BookTable.css';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your table has been booked successfully!');
    console.log(formData);
  };

  return (
    <div className="app__booktable" id="booktable">
      <div className="app__booktable-content">
        <h1 className="headtext__cormorant">Book Your Table</h1>
        <p className="p__opensans">Fill out the form to reserve your spot.</p>

        <form onSubmit={handleSubmit} className="booktable-form">
          <div className="booktable-form-container">
            {/* Left side - Name, Email, Phone */}
            <div className="booktable-left">
              <div className="booktable-form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="booktable-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="booktable-form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Right side - Guests, Date, Time */}
            <div className="booktable-right">
              <div className="booktable-form-group">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  min="1"
                  required
                />
              </div>

              <div className="booktable-form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="booktable-form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="custom__button">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
