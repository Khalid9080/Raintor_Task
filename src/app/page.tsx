
import Image from "next/image";
import Footer from "./footer/page";
import Navbar from "./navbar/page";
import Stack from "./stack/page";
import About from "./about/page";
import Work from "./work/page";

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


      <section className="mx-auto max-w-11/12">
        <Stack></Stack>
      </section>

      <section className="mx-auto  relative">
        {/* Background Image */}
        <Image
          alt="Background Image"
          src="/images/about.png"  // Ensure this path is correct
          quality={100}
          fill
          style={{
            objectFit: 'cover',  // Stretch the image to cover the container
            position: 'absolute',  // Keep image in the background
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 3,  // Ensure the image stays behind the content
          }}
          sizes="100vw"
        />

        {/* About Content */}
        <div className="relative z-10 max-w-9/12 mx-auto -mt-10">
          <About />
        </div>
      </section>

      <section className="mx-auto max-w-11/12">
        <Work></Work>
      </section>



      <footer className="mx-auto max-w-10/12">
        <Footer />
      </footer>
    </div>
  );
}
