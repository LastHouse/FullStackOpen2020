import React from 'react';

const FilterPerson = ({ handleQuery, newQuery }) => {
  return (
    <div>
      filter shown with{' '}
      <input type="text" name="query" value={newQuery} onChange={handleQuery} />
    </div>
  );
};
export default FilterPerson;
