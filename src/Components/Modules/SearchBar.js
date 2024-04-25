import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

import toast, { Toaster } from "react-hot-toast";

function SearchBar() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const router = useRouter();

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter-price/${min}/${max}`);
    } else {
      toast.error("Enter minimum and maximum price!");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className={styles.container}>
        <div>
          <input
            placeholder="Inter min-price"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            placeholder="Inter max-price"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <button onClick={searchHandler}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
