import Image from "next/image";
import Navbar from "../componemts/Navbar";
import styles from "./ContactPage.module.css";

export default function contactus() {
  return (
    <div>
      <Navbar />
      {/* Contact Section */}
      <main className={styles.contactContainer}>
        <h2>Get In Touch With Us</h2>
        <p>
          For more information about our products & services, please feel free
          to drop us an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>

        <div className={styles.contactContent}>
          {/* Contact Details */}
          <div className={styles.contactDetails}>
            <div>
              <h4>Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>Mobile: +1 846 546-6789</p>
              <p>Hotline: +1 846 456-6789</p>
            </div>
            <div>
              <h4>Working Time</h4>
              <p>Monday–Friday: 9:00–22:00</p>
              <p>Saturday–Sunday: 9:00–21:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className={styles.contactForm}>
            <label>Your name</label>
            <input type="text" placeholder="Abc" />

            <label>Email address</label>
            <input type="email" placeholder="Abc@def.com" />

            <label>Subject</label>
            <input type="text" placeholder="This is an optional" />

            <label>Message</label>
            <textarea placeholder="Hi! I’d like to ask about" rows={5} />

            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <div>
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
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
