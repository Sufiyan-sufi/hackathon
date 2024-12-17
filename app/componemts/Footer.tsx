import styles from "./Footer.module.css"
import Image from "next/image"
export default function Footer() {
    return (
        <div>
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
    )
}