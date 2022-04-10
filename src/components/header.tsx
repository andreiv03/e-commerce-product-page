import { RiMenuFill, RiShoppingCartLine } from "react-icons/ri";
import styles from "../styles/components/header.module.scss";

interface PropsInterface {
  isMenuOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  cart: [number, React.Dispatch<React.SetStateAction<number>>];
};

const Header: React.FC<PropsInterface> = ({ isMenuOpen: [isMenuOpen, setIsMenuOpen], cart: [cart, setCart] }) => {
  return (
    <header className={styles.header}>
      <div className={styles.menu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <RiMenuFill />
      </div>

      <div className={styles.logo}>
        <img src="./assets/logo.svg" alt="Logo" />
      </div>

      <div className={styles.links}>
        <h3>Collections</h3>
        <h3>Men</h3>
        <h3>Women</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>

      <div className={styles.user}>
        <div className={styles.cart}>
          <RiShoppingCartLine />
          {cart ? <div className={styles.count}>{cart}</div> : null}
        </div>

        <div className={styles.avatar}>
          <img src="./assets/image-avatar.png" alt="Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;