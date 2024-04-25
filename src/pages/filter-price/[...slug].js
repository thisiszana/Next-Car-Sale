import CategoriList from "@/Components/Modules/CategoriList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

import toast, { Toaster } from "react-hot-toast";

function FilteredPrice() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter((i) => i.price > min && i.price < max);

  if (!filteredData.length) return toast.error("Not Found");

  return (
    <>
      <Toaster position="top-center" />
      <CategoriList data={filteredData} />
    </>
  );
}

export default FilteredPrice;
