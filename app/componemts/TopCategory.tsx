import styles from "./TopCategory.module.css";
import Image from "next/image";
export default function TopCategory() {
    return (
        <div>
            {/* Popular Products */}
            <section className={styles.popularSection}>
                <h3>Top Categories</h3>
                <div className={styles.popularGrid}>
                    <div className={styles.productCard}>
                        <Image src={"/Frame.png"} alt="image" width={424} height={424} />
                        <h4>Wing Chair</h4>
                        <span>3,580 Products</span>
                    </div>
                    <div className={styles.productCard}>
                        <Image src={"/stool.png"} alt="image" width={424} height={424} />
                        <h4>Wooden Chair</h4>
                        <span>157 Products</span>
                    </div>
                    <div className={styles.productCard}>
                        <Image src={"/desk.png"} alt="image" width={424} height={424} />
                        <h4>Desk Chair</h4>
                        <span>154 Products</span>
                    </div>
                </div>
            </section>
        </div>
    )
}