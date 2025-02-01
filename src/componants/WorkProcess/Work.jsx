import styles from "./Work.module.css";
export const Work = () => {
  return (
<main className={styles.inner}>
<div className={styles.head}>
            <h6>About me</h6>
            <h1><span>My</span> Workprocess</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div className={styles.workBody}>
            <div className={styles.bodyInner}>
                <div className={styles.inn}><span>Empathize</span></div>
            </div>
            <div className={styles.bodyInner}>
                <div className={styles.inn}><span>Define</span></div>
            </div>

            <div className={styles.bodyInner}>
                <div className={styles.inn}><span>Ideate</span></div>
            </div>

            <div className={styles.bodyInner}>
                <div className={styles.inn}><span>Prototype</span></div>
            </div>

            <div className={styles.bodyInner}>
                <div className={styles.inn}><span>Qualitytative test</span></div>
            </div>

            <div className={styles.bodyInner}>
                <div className={styles.inn}><span>Quantitative test</span></div>
            </div>
        </div>
       
        
</main>

  )
};
  export default Work;
