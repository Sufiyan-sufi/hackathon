"use client";

// import Link from "next/link";
import React from "react";
import styles from "./CartPage.module.css";
import Navbar from "../componemts/Navbar";
import Image from "next/image";

const cartItems = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 99.0,
    size: "L",
    quantity: 1,
    img: "/orange-chair.png",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 99.0,
    size: "L",
    quantity: 1,
    img: "/Frame.png",
  },
];

export default function FAQ() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Navbar />

      {/* Cart Section */}
      <main className={styles.cartContainer}>
        <div className={styles.cartItems}>
          <h2>Bag</h2>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <Image src={"/Image1.png"} alt="image" width={312} height={312} />
              <div className={styles.itemDetails}>
                <h4>{item.name}</h4>
                <p>
                  Ashen Slate/Cobalt Bliss <br />
                  Size: {item.size} &nbsp; Quantity: {item.quantity}
                </p>
              </div>
              <div className={styles.itemPrice}>
                <span>MRP: ${item.price}</span>
                <div className={styles.actions}>
                  <button>♥</button>
                  <button>🗑</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className={styles.summary}>
          <h3>Summary</h3>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutButton}>Member Checkout</button>
        </div>
      </main>

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
          <p>Vivamus tristique odio sit amet velit semper.</p>
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
