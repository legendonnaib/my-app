import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li className={styles.home}>
          {["About", "Contact", "Service"].map((text, index) => (
            <div key={index} className={styles.linkContainer}>
              <center>
                <Link href={`/${text.toLowerCase()}`} target="_blank" className={styles[text.toLowerCase()]}>
                  {text}
                </Link>
              </center>
              <br />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

// Assign display name
Navigation.displayName = "Navigation";

export default Navigation;
