import React, { useState, useEffect } from 'react';

const Threshold = ({ threshold, onThresholdChange }) => {
  const [inputValue, setInputValue] = useState(threshold);



  useEffect(() => {
    setInputValue(threshold);
  }, [threshold]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApplyThreshold = () => {
    onThresholdChange(parseFloat(inputValue));
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        Threshold:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={handleApplyThreshold}>Apply Threshold</button>
      <p>Currently Set Threshold: {threshold}</p>
    </div>
  );
};

export default Threshold;
