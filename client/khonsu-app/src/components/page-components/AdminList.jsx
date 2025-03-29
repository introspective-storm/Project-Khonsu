import React, { useState } from 'react';

function AdminList() {
  const [businesses, setBusinesses] = useState([]); // Consider fetching businesses in a separate useEffect
  const [loading, setLoading] = useState(false); // No initial loading needed for form submission
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [deal, setDeal] = useState('');

  const addNewBusiness = async (e) => {
    //e.preventDefault(); // Prevent default form submission
    setLoading(true); //set loading to true when you make the request
    setError(null); //reset error
    try {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT_ADD_BUSINESS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Important for sending JSON
        },
        body: JSON.stringify({ name, category, location, deal }),
      });

      if (!response.ok) {
        throw new Error('Failed to add business');
      }

      // Handle the response if needed. For example, add the new business to the businesses state.
      // const data = await response.json();
      // setBusinesses([...businesses, data]);

      //reset the form
      setName('');
      setCategory('');
      setLocation('');
      setDeal('');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={addNewBusiness}>
        <h1>Add Business</h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="deal"
          value={deal}
          onChange={(e) => setDeal(e.target.value)}
        /> */}
        <button type="submit" disabled = {loading}>
          {loading? "Submitting...": "Submit Business"}
        </button>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </form>
    </div>
  );
}

export default AdminList;