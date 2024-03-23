import React from 'react';

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default Search;
