import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default  () => {
  return (
    <div>
      <ul>
    <li className={styles.home}>
     <center>
     <Link href="/about" target="_blank"className={styles.about}>About</Link>
     </center> <br/>
     <center>
     <Link href="/contact" target="_blank"className={styles.contact}>Contact</Link>
     </center> <br/>
     <center>
     <Link href="/service" target="_blank" className={styles.service}>Service</Link>
     </center>
    
     </li>
     </ul>
     
    </div>
    
  );
}
