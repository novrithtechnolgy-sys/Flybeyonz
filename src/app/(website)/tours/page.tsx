import Navbar from "../Component/Navbar";
import Image from "next/image";

export default function ToursPage() {
    return (
        <>
            <section className="relative w-full h-[60vh] md:h-[90vh]">
                <Image src="https://res.cloudinary.com/dvgodnxlg/image/upload/v1782199576/ffae334d8a063bc3576b052c8d5762a3f84c6a0e_iyqndz.webp" 
                fill
                alt="about"
                className="w-full h-full object-cover"
                />
            </section>
        </>
    );
}