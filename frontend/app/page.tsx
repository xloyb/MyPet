import Image from "next/image";

import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
  <Hero/>

      <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='Breeds'  />
            <CustomFilter title='Age'  />
          </div>
        </div>

    </main>
  );
}
