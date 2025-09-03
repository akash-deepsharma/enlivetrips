// import React from "react";
import { getPagewithSection } from "@/services/pageSection";
import Image from "next/image";
import Link from "next/link";
const mainpage = await getPagewithSection(3);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: mainpage.meta_title,
    description: mainpage.meta_description,
    keywords: mainpage.meta_description,
    openGraph: {
      type: "article",
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
export default function about() {
  return (
    <>
    {mainpage.addon_schemas.map((schema) => (
        <script
          key={schema.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema.schema }}
        />
      ))}
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url('${
            process.env.NEXT_PUBLIC_MEDIA_PATH +
            mainpage.sections[0].section[1].data.image
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">
              {mainpage.sections[0].section[0].data.Text}
            </h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{mainpage.sections[0].section[0].data.Text}</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="about-area position-relative overflow-hidden overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="img-box3">
                <div className="img1">
                  <img
                    src={
                      process.env.NEXT_PUBLIC_MEDIA_PATH +
                      mainpage.sections[1].section[0].data.image
                    }
                    alt="About"
                  />
                </div>
                <div className="img2">
                  <img
                    src={
                      process.env.NEXT_PUBLIC_MEDIA_PATH +
                      mainpage.sections[1].section[1].data.image
                    }
                    alt="About"
                  />
                </div>
                <div className="img3 movingX">
                  <img
                    src={
                      process.env.NEXT_PUBLIC_MEDIA_PATH +
                      mainpage.sections[1].section[2].data.image
                    }
                    alt="About"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xl-4">
                <div className="title-area mb-20">
                  <span className="sub-title style1">
                    {mainpage.sections[1].section[3].data.Text}
                  </span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    {mainpage.sections[1].section[4].data.Text}
                  </h2>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mainpage.sections[1].section[5].data.rich_text,
                  }}
                />
                <div className="about-item-wrap">
                  {mainpage.sections[1].section
                    .slice(6, 9) // 6,7,8 index wale elements lega
                    .map((item, index) => (
                      <div className="about-item style2" key={index}>
                        <div className="about-item_img">
                          <img src={process.env.NEXT_PUBLIC_MEDIA_PATH + item.data.section[0].data.image} alt="" />
                        </div>
                        <div className="about-item_centent">
                          <h5 className="box-title">{item.data.section[1].data.Text}</h5>
                          <p className="about-item_text">
                            {item.data.section[2].data.content}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-35">
                  <Link href={mainpage.sections[1].section[9].data.button_link} className="th-btn style3 th-icon">
                    {mainpage.sections[1].section[9].data.button_label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
