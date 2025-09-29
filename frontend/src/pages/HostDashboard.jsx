import React from 'react';

const HostDashboard = () => {
  // Mock data for posted opportunities
  const postedOpportunities = [
    {
      id: 1,
      title: 'Community Clean-up',
      date: '2025-10-04',
      applicants: 5
    },
    {
      id: 2,
      title: 'Food Bank Volunteer',
      date: '2025-11-20',
      applicants: 3
    }
  ];

  const handleCreateNew = () => {
    alert('Create New Opportunity - Feature coming soon!');
  };

  return (
    <div className="dashboard-container">
      <h1>Host Dashboard</h1>
      <div className="profile-section">
        <h2>Welcome, Host!</h2>
        <p>Email: host@example.com</p>
        <p>Organization: Local NGO</p>
      </div>

      <div className="opportunities-section">
        <h2>Your Posted Opportunities</h2>
        <ul>
          {postedOpportunities.map(opp => (
            <li key={opp.id}>
              <strong>{opp.title}</strong> - {opp.date} - Applicants: {opp.applicants}
            </li>
          ))}
        </ul>
      </div>

      <div className="actions">
        <button onClick={handleCreateNew}>Create New Opportunity</button>
      </div>
    </div>
  );
};

export default HostDashboard;
