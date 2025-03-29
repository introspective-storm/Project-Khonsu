import React, { useState, useEffect } from 'react';

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_ENDPOINT_FIND_BUSINESS,
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
      <div class="card-container">
        {businesses.map((business) => (
          <div class="cards" key={business._id}>
            <h2>{business.name}</h2>
            <p>{business.category}</p>
            <p>{business.location}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}

export default BusinessList;