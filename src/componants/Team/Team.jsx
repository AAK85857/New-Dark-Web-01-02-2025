import styles from "./Team.module.css";
export const Team = () => {
  return (
    <div className={styles.team}>
      <div className={styles.head}>
        <h6>teams</h6>
        <h1>
          <span>My</span> Team members
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className={styles.dps}>
        <div className={styles.dp1}>
          <div className={styles.dpimgs}>
            <img src="./src/assets/images/dp1.png" alt="" />
          </div>
          <div className={styles.dpcont}>
            <h2>UI & UX Design</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
        <div className={styles.dp1}>
          <div className={styles.dpimgs}>
            <img src="./src/assets/images/dp2.png" alt="" />
          </div>
          <div className={styles.dpcont}>
            <h2>UI & UX Design</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>

        <div className={styles.dp1}>
          <div className={styles.dpimgs}>
            <img src="./src/assets/images/dp3.png" alt="" />
          </div>
          <div className={styles.dpcont}>
            <h2>UI & UX Design</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>

        <div className={styles.dp1}>
          <div className={styles.dpimgs}>
            <img src="./src/assets/images/dp4.png" alt="" />
          </div>
          <div className={styles.dpcont}>
            <h2>UI & UX Design</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
