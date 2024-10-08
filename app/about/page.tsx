import aboutpage from "./about.module.css"
import Link from "next/link";

export default function About() {
    return (
      <div>
        <ul>
      <li className={aboutpage.Aboutpage}>
       <h1>This is About Page</h1>
      
       </li>
       </ul>
       <br/>

       <Link href="/" target="_blank" className={aboutpage.Home}>Back To HomePage</Link>
      </div>
    );
  }