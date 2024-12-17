import Image from "next/image"
export default function CompanyLogo(){
    return(
        <div className="company-logo">
            <Image src={"/logo.png"} alt="logo" width={85} height={87} />
            <Image src={"/logo1.png"} alt="logo1" width={107} height={109} />
            <Image src={"/logo2.png"} alt="logo2" width={135} height={139} />
            <Image src={"/logo3.png"} alt="logo3" width={63} height={65} />
            <Image src={"/logo4.png"} alt="logo4" width={98} height={101} />
            <Image src={"/logo5.png"} alt="logo5" width={113} height={115} />
            <Image src={"/logo6.png"} alt="logo6" width={84} height={87} />
        </div>
    )
}