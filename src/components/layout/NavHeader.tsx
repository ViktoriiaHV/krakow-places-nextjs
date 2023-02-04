import Link from "next/link";
import Image from "next/image";
import dishLogo from '../../../icons/dish.png'

import classes from "./NavHeader.module.css";

function NavHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image src={dishLogo} alt='dish' height={60}/>
        <h5>Krakow Places</h5>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'><h3>All Places</h3></Link>
          </li>
          <li>
            <Link href='/new-place'><h3>Add a New Place</h3></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
