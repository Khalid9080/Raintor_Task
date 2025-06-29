
import Image from "next/image";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white montserrat">
       {/* Image with Next.js Image Component */}
     

      <nav className="mx-auto max-w-10/12">
       <Image
        alt="Background Image"
        src="/images/Vector.png"  // Ensure this path is correct
        quality={100}
        fill
        style={{
          objectFit: 'cover',  // Apply objectFit to stretch the image
          position: 'absolute',  // Image stays in the background
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 1,  // Ensure the image stays behind the content
        }}
        sizes="100vw"
      />
        <Navbar />
      </nav>
      
    
      <footer className="mx-auto max-w-10/12">
       <Footer />
      </footer>
    </div>
  );
}
