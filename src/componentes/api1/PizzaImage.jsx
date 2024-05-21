import React, { useState } from 'react';
import "./api1.css";

const PizzaImage = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [statusCode, setStatusCode] = useState('');
  const [error, setError] = useState(null);

  const fetchPizzaImage = async (code) => {
    try {
      const response = await fetch(`https://http.pizza/${code}.jpg`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const imgSrc = URL.createObjectURL(blob);
      setImageSrc(imgSrc);
      setStatusCode(code);
      setError(null);
    } catch (err) {
      console.error('Error fetching the pizza image:', err);
      setImageSrc('');
      setStatusCode('');
      setError('Error fetching the image');
    }
  };

  const handleInputChange = (event) => {
    const code = event.target.value;
    if (code) {
      fetchPizzaImage(code);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter HTTP status code"
        onChange={handleInputChange}
      />
      {error && <p>{error}</p>}
      {imageSrc && (
        <div>
          <h3>HTTP Status Code: {statusCode}</h3>
          <img src={imageSrc} alt={`HTTP ${statusCode}`} />
        </div>
      )}
    </div>
  );
};

export default PizzaImage;
