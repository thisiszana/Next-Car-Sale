import CarsPage from "@/Components/Template/CarsPage.js";
import carsData from "../../data/carsData.js";

function CarsDetails() {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}

export default CarsDetails;
