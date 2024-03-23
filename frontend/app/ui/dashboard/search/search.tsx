'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
  
    const handleSearch = (e) => {
      const params = new URLSearchParams(searchParams);
  
      params.set("q", e.target.value);
  
      replace(`${pathname}?${params}`);
    }
  return (
    <div>
      <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" onChange={handleSearch} />
    </div>
  );
};

export default Search;
