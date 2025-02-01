import styles from "./Complete.module.css";
export const Complete = () => {
  return (
    <div className={styles.complete}>
      <div className={styles.head}>
        <h6>portfolios</h6>
        <h1>
          <span>My</span> Completed Projects
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className={styles.hiddens}>
        <button className={styles.centerbtn}>View all Projects</button>
        <div className={styles.hidden1}>
          <img src="./src/assets/images/hid-1.png" alt="" />
          <img src="./src/assets/images/hid-2.png" alt="" />
          <img src="./src/assets/images/hid-3.png" alt="" />
          <img src="./src/assets/images/hid-4.png" alt="" />
          <img src="./src/assets/images/hid-5.png" alt="" />
          <img src="./src/assets/images/hid-6.png" alt="" />
        </div>
        <div className={styles.hidden2}>
          <img src="./src/assets/images/hid-7.png" alt="" />
          <img src="./src/assets/images/hid-8.png" alt="" />
          <img src="./src/assets/images/hid-9.png" alt="" />
          <img src="./src/assets/images/hid-10.png" alt="" />
          <img src="./src/assets/images/hid-10.png" alt="" />
          <img src="./src/assets/images/hid-4.png" alt="" />
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.part1}>
          <img src="./src/assets/images/profile.png" alt="" />
          <img
            className={styles.img2}
            src="./src/assets/images/star.png"
            alt=""
          />
          <img
            className={styles.img3}
            src="./src/assets/images/skill.png"
            alt=""
          />
        </div>
        <div className={styles.part2}>
          <h6>“Service is good and I recommend”</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostru <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostru <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostru
          </p>
          <img src="./src/assets/images/signature.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Complete;
