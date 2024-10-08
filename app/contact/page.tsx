import contactpage from "./contact.module.css"
import Link from "next/link";

export default function ConactPage() {
    return (
      <div >
        <ul>
          <li className={contactpage.contactpage}>
        <h1> Contact US</h1> <br/>
        </li>
        </ul>
        <br/>
      

       <Link href="/" target="_blank" className={contactpage.Home}>Back To HomePage</Link>
       
       
      </div>
    );
  }
  