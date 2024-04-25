import Link from "next/link";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>ZEDCAR</h2>
          <p>Choose an Buy your car</p>
        </Link>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        Next.js project | ZedCar Site &copy;
      </footer>
    </>
  );
}

export default Layout;
