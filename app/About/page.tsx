"use client";

// import Link from "next/link";
import React from "react";
import styles from "./AboutPage.module.css";
import Navbar from "../componemts/Navbar";
import Image from "next/image";

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

export default function About() {
  return (
    <div>
      <Navbar />

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <h2>About Us - Comforty</h2>
          <p>
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button>View Collection</button>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src={"/Image Block.png"}
            alt="image"
            width={312}
            height={312}
          />
        </div>
      </section>

      {/* Brand Differences */}
      <section className={styles.brandSection}>
        <h3>What Makes Our Brand Different</h3>
        <div className={styles.brandGrid}>
          <div className={styles.brandCard}>
            <h4>Next day as standard</h4>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>
          <div className={styles.brandCard}>
            <h4>Made by true artisans</h4>
            <p>
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className={styles.brandCard}>
            <h4>Unbeatable prices</h4>
            <p>
              For our materials and quality you wont find better prices
              anywhere.
            </p>
          </div>
          <div className={styles.brandCard}>
            <h4>Recycled packaging</h4>
            <p>
              We use 100% recycled to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className={styles.popularSection}>
        <h3>Our Popular Products</h3>
        <div className={styles.popularGrid}>
          <div className={styles.productCard}>
            <Image src={"/Large.png"} alt="image" width={312} height={312} />
            <h4>The Poplar suede sofa</h4>
            <span>$99.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Photo.png"} alt="image" width={312} height={312} />
            <h4>The Dandy chair</h4>
            <span>$99.00</span>
          </div>
          <div className={styles.productCard}>
            <Image src={"/Photo1.png"} alt="image" width={312} height={312} />
            <h4>The Dandy chair</h4>
            <span>$99.00</span>
          </div>
        </div>
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
