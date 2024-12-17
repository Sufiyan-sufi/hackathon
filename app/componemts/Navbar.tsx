import Image from "next/image";
import Link from "next/link";
// import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className="name">
        <h1>
          <Image
            src={"/Logo Icon.png"}
            alt="logo icon"
            width={40}
            height={40}
          />
          <Link href={"/"}>Comforty</Link>
        </h1>
      </div>
      <div className="top-right">
        <div className="searchIcon">
          <h2>Cart</h2>
          <Image
            src={"/Shopping--cart.svg"}
            alt="Cart"
            width={20}
            height={20}
          />

          <div className="account">
            <Image
              src={"/User--avatar.svg"}
              alt="Account"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <h2>
          <div>
            <Link href="/">Home</Link>
          </div>
        </h2>
        <h2>
          <Link href={"/productspage"}>Shop</Link>
        </h2>
        <h2>
          <Link href={"/singleproductpage"}>Product</Link>
        </h2>
        <h2>
          <Link href={"/FAQ"}>Pages</Link>
        </h2>
        <h2>
          <Link href={"/About"}>About</Link>
        </h2>
        <h2>
          <Link href={"/contactus"}>Contact (808) 555-0111</Link>
        </h2>
      </div>
    </>
  );
}
