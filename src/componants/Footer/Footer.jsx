import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.Footerlast}>
      <div className={styles.footer}>
        <div className={styles.footerInn}>
          <div className={styles.footericon}>
            <div className={styles.Ficon}>
              <img src="./src/assets/images/ficon.png" alt="" />
            </div>
            <div className={styles.ftext}>
              <h2>Have any project idea?</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
          <div className={styles.btn}>
            <button>Contact Now</button>
          </div>
        </div>
      </div>
      <div className={styles.last}>
        <div className={styles.last1}>
          <div className={styles.lastpart1}>
            <div className={styles.logo}>
              <a href="#">
                <img src="./src/assets/images/logo.png" alt="" />
              </a>
            </div>
            <div className={styles.para}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit. 
              </p>
            </div>
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

          <div className={styles.lastpart2}>
            <h1>QuickLink</h1>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Projects</li>
              <li>Clint</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className={styles.lastpart3}>
            <h1>Important</h1>
            <ul>
              <li>Career</li>
              <li>Term & condition</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Social Work</li>
            </ul>
          </div>

          <div className={styles.lastpart4}>
            <h1>Contacts</h1>
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
              <p>6391 Eligin St. Celina Delaware</p>
            </div>
          </div>
        </div>
        <div className={styles.last2}>
          <p>Copyright 2022 _ All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
