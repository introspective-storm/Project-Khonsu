import React, { useState, useEffect } from 'react';

function AdminList() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [deal, setDeal] = useState('');

  useEffect(() => {
    const addNewBusiness = async (e) => {
        e.preventDefault();
      try {
        const response = await fetch(import.meta.env.VITE_API_ENDPOINT_ADD_BUSINESS,
            {
                method: "POST",
                body: JSON.stringify({name, category, location, deal}),
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

    addNewBusiness();
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
    <form onSubmit={}>
        <h1>Add Business</h1>
        <input 
        type="text" 
        placeholder="name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="category"
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="location"
        value={location}
        onChange={(e)=> setLocation(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="deal"
        value={deal}
        onChange={(e)=> setDeal(e.target.value)}
        />
        <button type="submit">Submit Business</button>
    </form>
  </div>
  
  );
}

export default AdminList;