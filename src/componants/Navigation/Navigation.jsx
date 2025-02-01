import styles from "./navigation.module.css";
export const Navigation = () => {
  return (
    <container>
      <nav>
        <bar1>
          <div className={styles.inner}>
            <div className={styles.icon}>
              <ul>
                <li>
                  <a href="#">
                    <img src="./src/assets/images/linkdineicon.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./src/assets/images/facebookicon.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./src/assets/images/teslaicon.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./src/assets/images/youtube_icon.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.navcontact}>
            <div className={styles.call}>
              <img
                src="./src/assets/images/call.png"
                className={styles.smallimg}
                alt=""
              />
              <p>+ 123 456 789</p>
            </div>
            <div className={styles.send}>
              <img
                src="./src/assets/images/send.png"
                alt=""
                className={styles.smallimg}
              />
              <p>example@gmail.com</p>
            </div>
            <div className={styles.location}>
              <img
                src="./src/assets/images/location.png"
                alt=""
                className={styles.smallimg}
              />
              <p>6391 Eligin St. Celina</p>
            </div>
          </div>
        </bar1>
        <bar2 className={`${styles.nav2} ${styles.inner}`}>
          <div className={styles.logo}>
            <a href="#">
              <img src="./src/assets/images/logo.png" alt="" />
            </a>
          </div>
          <div className={styles.home}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Clint</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn}>Discuss for Projects</button>
          </div>
        </bar2>
      </nav>
      <div className={`${styles.navbody} ${styles.inner}`}>
        <div className={styles.text}>
          <div className={styles.text1}>
            <h1>
              This is your <br />
              designer <br />
              <span>Esther Howard</span>
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={styles.text2}>
            <div className={styles.bodyBtn}>
              <button>Discuss for Projects</button>
            </div>
            <div className={styles.BodyViewBtn}>
              <a href="#">
                <img src="./src/assets/images/viewPortfolioBtn.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.boy}>
            <img src="./src/assets/images/boyimg.png" alt="" />
           <div className={styles.skill}>
           <a href="#"><img src="./src/assets/images/ski.svg" alt="" /></a>
           </div>
        </div>
      </div>
    </container>
  );
};
export default Navigation;
