import styles from "./TopCategory.module.css";
import Image from "next/image"
export default function FeaturedProduct() {
    return (
        <div>
            {/* Popular Products */}
            <section className={styles.popularSection}>
                <h3>Featured Product</h3>
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
                </div>
            </section>
        </div>
    )
}