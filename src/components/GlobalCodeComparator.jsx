// src/components/GlobalCodeComparator.jsx
import React, { useState } from 'react';
import axios from 'axios';

const GlobalCodeComparator = () => {
  const [activity, setActivity] = useState('');
  const [stakeholder, setStakeholder] = useState('');
  const [comparison, setComparison] = useState({});

  const handleCompare = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/compare/global', { activity, stakeholder });
      setComparison(response.data.comparison);
    } catch (error) {
      console.error('Error fetching comparison data:', error);
    }
  };

  return (
    <div>
      <h3>Global Code Comparator</h3>
      <div>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter Activity (e.g., sponsorship)"
        />
        <input
          type="text"
          value={stakeholder}
          onChange={(e) => setStakeholder(e.target.value)}
          placeholder="Enter Stakeholder (e.g., HCP)"
        />
        <button onClick={handleCompare}>Compare</button>
      </div>

      <div>
        <h4>Comparison Results:</h4>
        {comparison ? (
          <div>
            <h5>UK ABPI</h5>
            <p>Hospitality: {comparison.UK_ABPI?.hospitality}</p>
            <p>Threshold: {comparison.UK_ABPI?.threshold}</p>

            <h5>US PhRMA</h5>
            <p>Hospitality: {comparison.US_PhrMA?.hospitality}</p>
            <p>Threshold: {comparison.US_PhrMA?.threshold}</p>

            <h5>EU EFPIA</h5>
            <p>Hospitality: {comparison.EU_EFPIA?.hospitality}</p>
            <p>Threshold: {comparison.EU_EFPIA?.threshold}</p>
          </div>
        ) : (
          <p>No comparison data available. Please enter activity and stakeholder.</p>
        )}
      </div>
    </div>
  );
};

export default GlobalCodeComparator;
