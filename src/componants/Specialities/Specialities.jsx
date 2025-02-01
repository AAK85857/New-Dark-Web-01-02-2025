import styles from "./Specialities.module.css";
export const Specialities = () => {
  return (
    <main className={styles.inner}>
        <div className={styles.head}>
            <h6>speciality</h6>
            <h1><span>My</span> Specialities</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div className={`${styles.items} ${styles.inner}`}>
            <div className={styles.item1}>
                <img src="./src/assets/images/email.png" alt="" />
                <h2>Email Marketing</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className={styles.item1}>
            <img src="./src/assets/images/store.png" alt="" />
                <h2>Market Analysis</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className={styles.item1}>
            <img src="./src/assets/images/stars.png" alt="" />
                <h2>Keyword Research</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    </main>
  )
};
  export default Specialities;