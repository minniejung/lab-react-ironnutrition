import React from 'react';

const Search = ({ searchedString, callbackSearch }) => {
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search"
        value={searchedString}
        onChange={(e) => callbackSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
