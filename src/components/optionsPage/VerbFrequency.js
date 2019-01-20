import React from 'react';

const VerbFrequency = () => {
  return (
    <div>
      <h4>Choose verbs by frequency</h4>
      <select>
        <option value="20">20 most popular</option>
        <option value="50">50 most popular</option>
        <option selected="100">100 most popular</option>
        <option value="all">All verbs</option>
      </select>
    </div>
  );
};

export default VerbFrequency;
