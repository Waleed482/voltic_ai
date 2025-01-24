import Image from "next/image";

const aboutUsImage = "/aboutus_img/aboutUs_3.png";
const backgroundImage = "/aboutus_img/bg.png";
const officeImage = "/aboutus_img/aboutUs_2.png";

export default function AboutUs() {
  return (
    <>
      {/* First Section */}
      <section className="relative bg-blue-800 text-white py-24">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-100"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-blue-800 opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1
            className="font-bold leading-tight text-white"
            style={{ fontSize: "80px", lineHeight: "1.2" }}
          >
            CRAFTING THE FUTURE OF <br />
            SOFTWARE{" "}
            <span className="inline-block h-18 bg-black text-white px-4 py-1 rounded-full mx-2 ">
              ★
            </span>{" "}
            INNOVATION
          </h1>

          {/* Subtext */}
          <p
            className="mt-6 text-gray-300"
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Discover the journey of innovation at Outgrid, where our expert
            developers and creative minds build tailored software solutions. Our
            team delivers cutting-edge technology and scalable applications,
            empowering businesses to achieve remarkable success.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex-1 md:pl-20 lg:pl-40">
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "55px", lineHeight: "1.3" }}
            >
              ABOUT US
            </h2>
            <p
              className="text-gray-300 mb-6"
              style={{ fontSize: "20px", lineHeight: "1.5" }}
            >
              We specialize in delivering innovative software solutions tailored
              to meet the unique needs of businesses across industries. With a
              team of skilled developers, designers, and strategists, we turn
              idea into reality by building scalable, secure, and
              high-performance applications.
            </p>
            <p
              className="text-gray-300"
              style={{ fontSize: "20px", lineHeight: "1.5" }}
            >
              We are committed to helping you achieve your goals and succeed in
              a competitive digital landscape.
            </p>
          </div>

          <div className="flex-1 flex justify-between md:justify-start md:mr-52">
            <Image
              src={officeImage}
              alt="Office"
              width={466.35}
              height={523}
              className="rounded-lg shadow-lg"
              quality={100}
            />
          </div>
        </div>

        <div className="max-w-8xl lg:pl-40 lg:pr-40 mx-auto px-4 sm:px-6 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center justify-around gap-6">
            <div className="text-center">
              <h3
                className="font-bold text-blue-500"
                style={{ fontSize: "64px", lineHeight: "1.3" }}
              >
                05+
              </h3>
              <p
                className="text-gray-300"
                style={{ fontSize: "24px", lineHeight: "1.5" }}
              >
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <h3
                className="font-bold text-blue-500"
                style={{ fontSize: "64px", lineHeight: "1.3" }}
              >
                20+
              </h3>
              <p
                className="text-gray-300"
                style={{ fontSize: "24px", lineHeight: "1.5" }}
              >
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <h3
                className="font-bold text-blue-500"
                style={{ fontSize: "64px", lineHeight: "1.3" }}
              >
                15+
              </h3>
              <p
                className="text-gray-300"
                style={{ fontSize: "24px", lineHeight: "1.5" }}
              >
                Talented Team Members
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
