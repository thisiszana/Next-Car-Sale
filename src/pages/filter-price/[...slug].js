import CategoriList from "@/Components/Modules/CategoriList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

function FilteredPrice() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter((i) => i.price > min && i.price < max);

  if (!filteredData.length) return <h3>Not found</h3>;

  return <CategoriList data={filteredData} />;
}

export default FilteredPrice;
