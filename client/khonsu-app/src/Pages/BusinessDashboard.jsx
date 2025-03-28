import React, { useState, useEffect } from 'react';

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/businesses/find',
            {
                method: "POST",
                body: JSON.stringify({}),
            }
        )
        if (!response.ok) {
          throw new Error('Failed to fetch businesses');
        }
        const data = await response.json();
        setBusinesses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  if (loading) {
    return <p>Loading businesses...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Businesses</h2>
      {businesses.length === 0 ? (
        <p>No businesses found.</p>
      ) : (
        <ul>
          {businesses.map((business) => (
            <li key={business._id}> {/* Assuming your MongoDB documents have an _id field */}
              {business.name} - {business.category} - {business.location}
              {/* Add other business properties as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BusinessList;
