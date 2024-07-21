import { Link } from "react-router-dom"
import styles from "../styles/SideBar.module.css"
export function SideBar({array = []}) {

    return(
        <ul className={styles.ul}>
            {array.map((elem)=> {
                return <li className={styles.li} key={elem.name}><Link className={styles.li} to={`/Components/${elem.name}`}>{elem.name}</Link></li>
            })}
        </ul>
    )
}