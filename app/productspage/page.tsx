"use client";

// import Link from "next/link";
import React from "react";
import styles from "./ProductsPage.module.css";
import Image from "next/image";
import Navbar from "../componemts/Navbar";

const products = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: 20,
    badge: "New",
    img: "/chair1.png",
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: 20,
    oldPrice: 30,
    badge: "Sales",
    img: "/chair2.png",
  },
  { id: 3, title: "Library Stool Chair", price: 20, img: "/chair3.png" },
  { id: 4, title: "Library Stool Chair", price: 20, img: "/chair4.png" },
  {
    id: 5,
    title: "Library Stool Chair",
    price: 20,
    badge: "New",
    img: "/chair5.png",
  },
  {
    id: 6,
    title: "Library Stool Chair",
    price: 20,
    oldPrice: 30,
    badge: "Sales",
    img: "/chair6.png",
  },
  { id: 7, title: "Library Stool Chair", price: 20, img: "/chair7.png" },
  { id: 8, title: "Library Stool Chair", price: 20, img: "/chair8.png" },
];

export default function productspage() {
  return (
    <div>
      <Navbar />
      {/* Products */}
      <main className={styles.productsContainer}>
        <h2>All Products</h2>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <Image src={"/greychair.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Image.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/stool.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Image3.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          {/* {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            {product.badge && (
              <span className={styles.badge}>{product.badge}</span>
            )}
            <Image src={"/Image.png"} alt="image" width={312} height={312} />
            <h3>{product.title}</h3>
            <div className={styles.priceSection}>
              <span className={styles.price}>${product.price}</span>
              {product.oldPrice && (
                <span className={styles.oldPrice}>${product.oldPrice}</span>
              )}
            </div>
          </div>
        ))} */}
        </div>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <Image src={"/chair.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Image1.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/desk.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Image2.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
        </div>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <Image src={"/Photo.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Photo1.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Frame.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Image Block.png"} alt="image" width={312} height={312} />
            <h4>Libray Stool Chair</h4>
            <span>$20.00</span>
          </div>
        </div>
      </main >

      {/* Newsletter */}
      <section className={styles.newsletterSection} >
        <h3>Or Subscribe To The Newsletter</h3>
        <input type="email" placeholder="Email Address" />
        <button>Submit</button>
      </section >

      {/* Instagram Section */}
      <section className={styles.instagramSection} >
        <h3>Follow Products And Discounts On Instagram</h3>
        <div className={styles.instagramImages}>
          <section className={styles.popularSection}>
            <div className={styles.popularGrid}>
              <div className={styles.productCard}>
                <Image src={"/Image Block.png"} alt="image" width={312} height={312} />
                <h4>Libray Stool Chair</h4>
                <span>$20.00</span>
              </div>
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
            </div>
          </section>
          {/* {products.slice(0, 6).map((product) => (
            <Image src={"/Image1.png"} alt="image" width={312} height={312} />
          ))} */}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} >
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
      </footer >
    </div >
  );
}
