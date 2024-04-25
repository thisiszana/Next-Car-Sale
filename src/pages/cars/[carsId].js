import { useRouter } from "next/router";

import carsData from "@/data/carsData";
import CarDetails from "@/Components/Template/CarDetails";

function CarDetail() {
  const router = useRouter();
  const { carsId } = router.query;
  const carDetails = carsData[carsId - 1];
  console.log(carDetails)

  return <CarDetails {...carDetails} />;
}

export default CarDetail;
