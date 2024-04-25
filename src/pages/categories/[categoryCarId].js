import CategoriList from "@/Components/Modules/CategoriList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CategoryDetail() {
  const router = useRouter();
  const { categoryCarId } = router.query;
  const categoriesList = carsData.filter(
    (items) => items.category === categoryCarId
  );

  return <CategoriList data={categoriesList} />;
}

export default CategoryDetail;
