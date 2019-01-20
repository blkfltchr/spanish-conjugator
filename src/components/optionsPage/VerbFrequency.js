import React from 'react';

const VerbFrequency = () => {
  return (
    <div>
      <h4>Choose verbs by frequency</h4>
      <select>
        <option value="grapefruit">20 most popular</option>
        <option value="lime">50 most popular</option>
        <option selected value="coconut">
          100 most popular
        </option>
        <option value="mango">All verbs</option>
      </select>
    </div>
  );
};

export default VerbFrequency;
