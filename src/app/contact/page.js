import Image from "next/image";
import ContactUsForm from "@/components/Contact/ContactUsForm";
import Link from "next/link";
import { getPagewithSection } from "@/services/pageSection";
import { getDestination } from "@/services/destinationApi";

const mainpage = await getPagewithSection(5);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: mainpage.meta_title,
    description: mainpage.meta_description,
    keywords: mainpage.meta_description,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      title: mainpage.meta_title,
      description: mainpage.meta_description,
      keywords: mainpage.meta_description,
      // images: [{ url: page.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: mainpage.meta_title,
      description: mainpage.meta_description,
      // images: [blog.blog.image],
    },
  };
}
export default async function Contact() {
  return (
    <>
        <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `url('${
            process.env.NEXT_PUBLIC_MEDIA_PATH +
            mainpage.sections[0].section[0].data.image
          }')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{mainpage.sections[0].section[1].data.Text}</h1>
          <ul className="breadcumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{mainpage.sections[0].section[1].data.Text}</li>
          </ul>
        </div>
      </div>
    </div>




  
    <div className="space">
      <div className="container">
        {/* Title Area */}
        <div className="title-area text-center">
          <span className="sub-title">Get In Touch</span>
          <h2 className="sec-title">Our Contact Information</h2>
        </div>

        {/* Contact Info Grid */}
        <div className="row gy-4 justify-content-center">
          {/* Address */}
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid style2">
              <div className="about-contact-icon">
                <Image
                  src="/img/icon/location-dot2.svg"
                  alt="Address Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Our Address</h6>
                <p className="about-contact-details-text">
                  {mainpage.sections[1].section[0].data.Text}
                </p>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <Image
                  src="/img/icon/call.svg"
                  alt="Phone Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Phone Number</h6>
                <p className="about-contact-details-text">
                  <Link href={mainpage.sections[1].section[1].data.button_link}>{mainpage.sections[1].section[1].data.button_label}</Link>
                </p>
                <p className="about-contact-details-text">
                  <Link href={mainpage.sections[1].section[2].data.button_link}>{mainpage.sections[1].section[2].data.button_label}</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
              <div className="about-contact-icon">
                <Image
                  src="/img/icon/mail.svg"
                  alt="Email Icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Email Address</h6>
                <p className="about-contact-details-text">
                  <Link href={mainpage.sections[1].section[3].data.button_link}>{mainpage.sections[1].section[3].data.button_label}</Link>
                </p>
                <p className="about-contact-details-text">
                  <Link href={mainpage.sections[1].section[4].data.button_link}>{mainpage.sections[1].section[4].data.button_label}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <ContactUsForm heading={mainpage.sections[1].section[5].data.Text} banner={mainpage.sections[1].section[6].data.image} video={mainpage.sections[1].section[7].data.url} />
        <div className="">
            <iframe src={mainpage.sections[1].section[8].data.url} width="100%" height="450" allowFullScreen ="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}