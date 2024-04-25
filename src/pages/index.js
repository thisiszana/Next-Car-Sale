import AllButton from "@/Components/Modules/AllButton";
import Categories from "@/Components/Modules/Categories";
import SearchBar from "@/Components/Modules/SearchBar";
import CarsPage from "@/Components/Template/CarsPage";
import carsData from "@/data/carsData";

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </>
  );
}
