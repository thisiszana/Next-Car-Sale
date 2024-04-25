import Link from "next/link";
import DetailsIcon from "../icons/DetailsIcon";
import Location from "../icons/Location";
import styles from "./Card.module.css";

function Card(props) {
  const { id, name, model, year, distance, location, image, price } = props;
  
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h4 className={styles.title}>{`${name} ${model}`}</h4>
      <div className={styles.detailsBox}>
        <Link href={`/cars/${id}`} className={styles.details}>
          <DetailsIcon width={20} height={20} />
          <p>Details</p>
        </Link>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
      </div>
      <div className={styles.footer}>
        <div>
          <p>$ {price}</p>
        </div>
        <div className={styles.location}>
          <p>{location}</p>
          <Location />
        </div>
      </div>
    </div>
  );
}

export default Card;
