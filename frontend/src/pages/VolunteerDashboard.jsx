import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerDashboard = () => {
  // Mock data for applied opportunities
  const appliedOpportunities = [
    {
      id: 1,
      title: 'Community Clean-up',
      date: '2025-10-04',
      status: 'Confirmed'
    },
    {
      id: 2,
      title: 'Food Bank Volunteer',
      date: '2025-11-20',
      status: 'Pending'
    }
  ];

  return (
    <div className="dashboard-container">
      <h1>Volunteer Dashboard</h1>
      <div className="profile-section">
        <h2>Welcome, Volunteer!</h2>
        <p>Email: volunteer@example.com</p>
        <p>Skills: Teaching, Cleaning</p>
      </div>

      <div className="opportunities-section">
        <h2>Your Applied Opportunities</h2>
        <ul>
          {appliedOpportunities.map(opp => (
            <li key={opp.id}>
              <strong>{opp.title}</strong> - {opp.date} - Status: {opp.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="actions">
        <Link to="/opportunity">
          <button>Browse More Opportunities</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
