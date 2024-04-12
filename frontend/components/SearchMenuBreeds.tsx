"use client";

import Image from "next/image";
import { Fragment, useState } from "react";

import { dogBreeds } from "@/constants";
import { SearchBreedsProps } from "@/types/gonna-add-all-the-props-when-iget this project done";

const SearchMenuBreeds = ({ MenuBreeds, setMenuBreeds }: SearchBreedsProps) => {
  const [query, setQuery] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const filtereddogBreeds: string[] =
    query === ""
      ? dogBreeds
      : dogBreeds.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setQuery(inputValue);
    setShowOptions(inputValue !== "");
  };

  const handleOptionClick = (breed: string) => {
    setQuery(breed);
    setMenuBreeds(breed);
    setShowOptions(false);
  };

  return (
    <div className="search-MenuBreeds">
      <div className="relative w-full">
        <div className="absolute top-[14px]">
          <Image
            src="/images/pets-logo.svg"
            width={20}
            height={20}
            className="ml-4"
            alt="car logo"
          />
        </div>

        <input
          type="text"
          className="search-MenuBreeds__input"
          value={query}
          onChange={handleInputChange}
          placeholder="testing"
        />

        {showOptions && (
          <ul className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filtereddogBreeds.length === 0 && query !== "" ? (
              <li
                className="search-MenuBreeds__option"
                onClick={() => handleOptionClick(query)}
              >
                Create "{query}"
              </li>
            ) : (
              filtereddogBreeds.map((item) => (
                <li
                  key={item}
                  className="search-MenuBreeds__option"
                  onClick={() => handleOptionClick(item)}
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchMenuBreeds;

// 'use client'

// import Image from "next/image";
// import { Fragment, useState } from "react";
// import { Combobox, Transition } from "@headlessui/react";

// import { dogBreeds } from '@/constants'
// import { SearchBreedsProps } from "@/types";

// const SearchMenuBreeds = ({ MenuBreeds, setMenuBreeds }: SearchBreedsProps ) => {
//   const [query, setQuery] = useState("");

//   const filtereddogBreeds =
//     query === ""
//       ? dogBreeds
//       : dogBreeds.filter((item) =>
//           item
//             .toLowerCase()
//             .replace(/\s+/g, "")
//             .includes(query.toLowerCase().replace(/\s+/g, ""))
//         );

//   return (
//     <div className='search-MenuBreeds'>
//       <Combobox value={MenuBreeds} onChange={setMenuBreeds}>
//         <div className='relative w-full'>
//           <Combobox.Button className='absolute top-[14px]'>
//             <Image
//               src='/images/car-logo.svg'
//               width={20}
//               height={20}
//               className='ml-4'
//               alt='car logo'
//             />
//           </Combobox.Button>

//           <Combobox.Input
//             className='search-MenuBreeds__input'
//             displayValue={(item: string) => item}
//             onChange={(event) => setQuery(event.target.value)}
//             placeholder='testing'
//           />

//           <Transition
//             as={Fragment}
//             leave='transition ease-in duration-100'
//             leaveFrom='opacity-100'
//             leaveTo='opacity-0'
//             afterLeave={() => setQuery("")}
//           >
//             <Combobox.Options
//               className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
//               static
//             >
//               {filtereddogBreeds.length === 0 && query !== "" ? (
//                 <Combobox.Option
//                   value={query}
//                   className='search-MenuBreeds__option'
//                 >
//                   Create "{query}"
//                 </Combobox.Option>
//               ) : (
//                 filtereddogBreeds.map((item) => (
//                   <Combobox.Option
//                     key={item}
//                     className={({ active }) =>
//                       `relative search-MenuBreeds__option ${
//                         active ? "bg-primary-blue text-white" : "text-gray-900"
//                       }`
//                     }
//                     value={item}
//                   >
//                     {({ selected, active }) => (
//                       <>
//                         <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
//                           {item}
//                         </span>

//                         {selected ? (
//                           <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
//                           ></span>
//                         ) : null}
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>
//   );
// };

// export default SearchMenuBreeds;
