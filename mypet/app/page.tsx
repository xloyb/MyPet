import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "@/components";
import PetCard from "@/components/PetCard";
import { fetchPets } from "./lib/data";

export default async function Home() {
  const pets = await fetchPets();

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Pet Catalogue</h1>
          <p>Explore out Pets you might like</p>
        </div>

        <div className="home__filters">
          {/* <SearchBar /> */}

          {/* <div className='home__filter-container'>
            <CustomFilter title="Breeds" />
            <CustomFilter title="Age" />
          </div> */}
        </div>
        <div className="content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {pets.map((pet) => (
            <PetCard
              pid={pet._id}
              title={pet.name}
              imageUrl={pet.img ? `/img/${pet.img}` : "/images/default-Pet.png"}
              description={pet.desc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
