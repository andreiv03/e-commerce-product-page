import { RiCloseFill } from "react-icons/ri";
import styles from "../styles/components/menu.module.scss";

interface PropsInterface {
  isMenuOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const Menu: React.FC<PropsInterface> = ({ isMenuOpen: [isMenuOpen, setIsMenuOpen] }) => {
  return (
    <>
      <menu className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.close} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <RiCloseFill />
        </div>

        <div className={styles.links}>
          <h3>Collections</h3>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      </menu>

      <div className={`${styles.overlay} ${isMenuOpen ? styles.open : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </>
  );
}

export default Menu;