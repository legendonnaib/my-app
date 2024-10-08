import servicePage from "./service.module.css"
import Link from "next/link";

export default function ServicePage(){
    return(
        <div>
            <ul>
                <li className={servicePage.ServicePage}>
            
                <h1>This is our Services Page</h1>
                </li>
            </ul>
            <br/>
            


            <Link href="/" target="_blank" className={servicePage.Home}>Back To HomePage</Link>
        </div>
    );
}