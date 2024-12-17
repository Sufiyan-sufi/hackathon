import Link from "next/link"
import Image from "next/image"
export default function Header() {
    return (
        <div className="main-box">
            <div className="hero-info">
                <p className="para">
                    welcome to chairy
                </p>
                <h2 className="h-one">
                    Best Furniture
                    Collection for your
                    interior.
                </h2>
                <button className="button">
                <Link href={"/singleproductpage"}>Shop Now</Link>
                </button>
            </div>
            <div className="BG">
                <div className="chair">
                    <Image src={"/chair.png"} alt="chair" width={434} height={584} />
                </div>
            </div>

        </div>
    )
}