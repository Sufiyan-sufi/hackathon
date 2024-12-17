"use client";

// import Link from "next/link";
import styles from "./SingleProductPage.module.css";
import Image from "next/image";
import Navbar from "../componemts/Navbar";

const featuredProducts = [
  { id: 1, title: "Library Stool Chair", price: 99, img: "/chair1.png" },
  { id: 2, title: "Library Stool Chair", price: 99, img: "/chair2.png" },
  { id: 3, title: "Library Stool Chair", price: 99, img: "/chair3.png" },
  { id: 4, title: "Library Stool Chair", price: 99, img: "/chair4.png" },
  { id: 5, title: "Library Stool Chair", price: 99, img: "/chair5.png" },
];

export default function singleproductpage() {
  return (
    <div>
      <Navbar />

      {/* Product Details */}
      <main className={styles.productDetailsContainer}>
        <div className={styles.productImage}>
          <Image src={"/Image2.png"} alt="image" width={312} height={312} />
        </div>
        <div className={styles.productInfo}>
          <h2>Library Stool Chair</h2>
          <span className={styles.priceTag}>$20.00 USD</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button className={styles.addToCartButton}>Add To Cart</button>
        </div>
      </main>

      {/* Featured Products */}
      <section className={styles.featuredSection}>
        <h3>FEATURED PRODUCTS</h3>
        <div className={styles.featuredGrid}>
          <div className={styles.productCard}>
            <Image src={"/Image2.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Image1.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Image.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Frame.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/greychair.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          {/* {featuredProducts.map((product) => (
            <div key={product.id} className={styles.featuredCard}>
              <Image src={"/Image3.png"} alt="image" width={312} height={312} />
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          ))} */}
        </div>
        <a href="#" className={styles.viewAll}>
          View all
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>
          <Image
            src={"/Logo Icon.png"}
            alt="logo icon"
            width={40}
            height={40}
          />
          <h4>Comforty</h4>
          <p>Vivamus tristique odio sed amet velit semper.</p>
        </div>
        <div>
          <h4>Category</h4>
          <ul>
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
}
