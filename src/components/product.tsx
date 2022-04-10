import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiShoppingCartLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import styles from "../styles/components/product.module.scss";

interface PropsInterface {
  cart: [number, React.Dispatch<React.SetStateAction<number>>];
};

const gallery = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"];

const Product: React.FC<PropsInterface> = ({ cart: [cart, setCart] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={styles.product}>
      <div className={styles.gallery}>
        <div className={styles.main}>
          {gallery.map((image, index) => (
            <div key={image} className={`${styles.slide} ${activeSlide === index ? styles.active : ""}`}>
              <img src={`./assets/${image}`} alt={image} />
            </div>
          ))}

          <div className={styles.prev} onClick={() => setActiveSlide(prevState => prevState > 0 ? prevState - 1 : gallery.length - 1)}><RiArrowLeftSLine /></div>
          <div className={styles.next} onClick={() => setActiveSlide(prevState => prevState < gallery.length - 1 ? prevState + 1 : 0)}><RiArrowRightSLine /></div>
        </div>

        <div className={styles.slides}>
          {gallery.map((image, index) => (
            <div key={image} className={`${styles.slide} ${activeSlide === index ? styles.active : ""}`} onClick={() => setActiveSlide(index)}>
              <img src={`./assets/${image}`} alt={image} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.informations}>
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      
        <div className={styles.price}>
          <div className={styles.current}>
            <h2>$125.00</h2>
            <div className={styles.label}>50%</div>
          </div>

          <h4>$250.00</h4>
        </div>

        <div className={styles.buttons}>
          <div className={styles.count}>
            <span className={styles.minus} onClick={() => setCart((prevState: number) => prevState > 0 ? prevState - 1 : 0)}><FaMinus /></span>
            <span>{cart}</span>
            <span className={styles.plus} onClick={() => setCart((prevState: number) => prevState + 1)}><FaPlus /></span>
          </div>

          <button onClick={() => !cart && setCart(1)}>
            <RiShoppingCartLine />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;