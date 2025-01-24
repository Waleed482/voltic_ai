import Image from 'next/image'
import BacgroundImage from "@/public/homeImages/herosection-background-image.png";
import world  from "@/public/homeImages/imageWorld.png";
import colorImage from "@/public/homeImages/imageColor.png";



const MotivePara = () => {
  return (
    <>
    
    <div className='bg-black py-10 '>  
    <section className="relative rounded-3xl bg-blue-800 text-white  py-16">
  <div className="absolute inset-0 w-full h-full">
    <Image
      src={BacgroundImage}
      alt="Background"
      fill
      className="object-cover opacity-100"
      quality={100}
      priority
    />
    <div className="absolute inset-0 bg-blue-800 opacity-10"></div>
  </div>
  <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          DRIVING INNOVATION IN THE TECH WORLD{" "}
          <span className="inline-block align-middle">
            <Image
              src={world}
              alt="Globe Icon"
              width={50}
              height={32}
              className="inline-block"
            />
          </span>
          <br />
          THROUGH CUTTING-EDGE{" "}
          <span className="inline-block align-middle">
            <Image
              src={colorImage}
              alt="Gradient Shape"
              width={276}
              height={30}
              className="inline-block"
            />
          </span>{" "}
          SOFTWARE SOLUTIONS, DATA DRIVEN DEVELOPMENT AND USER ENGAGEMENT
        </h2>
      </div>
</section>
</div>
    </>
  )
}

export default MotivePara