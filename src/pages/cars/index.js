import CarsPage from "@/Components/Template/CarsPage.js";
import Categories from "@/Components/Modules/Categories.js";
import carsData from "../../data/carsData.js";

function CarsDetails() {
  return (
    <div>
      <Categories/>
      <CarsPage data={carsData} />
    </div>
  );
}

export default CarsDetails;
