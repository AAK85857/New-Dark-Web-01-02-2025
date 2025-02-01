import styles from "./Other.module.css";
export const Other = () => {
  return (
    <div className={styles.Other}>
    <div className={styles.head1}>
            <h6>speciality</h6>
            <h1><span>My</span> Other Services</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div  className={styles.lines}>
          <div  className={styles.line1}>
            <div className={styles.box1}>
              <div className={styles.boxIn}>
                <img src="./src/assets/images/serimg1.png" alt="" />
                  <h2>Digital branding</h2>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                  <button>Discuss for projects</button>
              </div>
            </div>
            <div className={styles.box1}>
              <div className={styles.boxIn}>
                <img src="./src/assets/images/serimg2.png" alt="" />
                  <h2>Creative solutions</h2>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                  <button>Discuss for projects</button>
              </div>
            </div>
            <div className={styles.box1}>
              <div className={styles.boxIn}>
                <img src="./src/assets/images/serimg3.png" alt="" />
                  <h2>Marketing solutions</h2>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                  <button>Discuss for projects</button>
              </div>
            </div>
          </div>
          <div  className={styles.line2}>
          <div className={styles.box1}>
              <div className={styles.boxIn}>
                <img src="./src/assets/images/serimg4.png" alt="" />
                  <h2>Business analysis</h2>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                  <button>Discuss for projects</button>
              </div>
            </div>
            <div className={styles.box1}>
              <div className={styles.boxIn}>
                <img src="./src/assets/images/serimg5.png" alt="" />
                  <h2>UI & UX Design</h2>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                  <button>Discuss for projects</button>
              </div>
            </div>
            <div className={styles.box1}>
              <div className={styles.boxIn}>
                <img src="./src/assets/images/serimg6.png" alt="" />
                  <h2>Photography</h2>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                  <button>Discuss for projects</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};
export default Other;
