import CarsPage from "@/Components/Template/CarsPage.js";
import Categories from "@/Components/Modules/Categories.js";
import carsData from "../../data/carsData.js";
import SearchBar from "@/Components/Modules/SearchBar.js";

function CarsDetails() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default CarsDetails;
