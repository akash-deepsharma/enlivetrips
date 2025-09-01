import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDays, faEnvelope, faUser, faUserAlt } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faPencil, faReply, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function PageDetail() {
  return (
    <>
    {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/img/bg/breadcumb-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Detail</h1>
            <ul className="breadcumb-menu">
              <li><Link href="/">Home</Link></li>
              <li>Blog Detail</li>
            </ul>
          </div>
        </div>
      </div>
    

    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="th-blog blog-single">
              <div className="blog-img">
                <img src="/img/blog/blog-s-1-4.jpg" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link className="author" href="blog"
                    ><i><FontAwesomeIcon icon={faUser}/></i>by David Smith</Link>
                  <Link href="blog"
                    ><i><FontAwesomeIcon icon={faCalendarDays}/> </i>05 May, 2025</Link>
                  <Link href="blog-details"
                    ><img src="/img/icon/map.svg" alt="" />Sea Beach</Link>
                </div>
                <h2 className="blog-title">
                  Relar Residence promotes sustainable transportation options,
                  with dedicated spaces.
                </h2>
                <p className="blog-text mb-30">
                  Welcome to Realar Residence, where sustainability meets
                  comfort in every corner. In this blog post, we'll explore the
                  green innovations seamlessly integrated into the fabric of
                  EcoLand, creating a unique and eco-friendly living experience
                  for its residents.
                </p>
                <p className="blog-text mb-30">
                  A platform dedicated to exploring the transformative power of
                  education. We believe that education is not only a means to
                  acquire knowledge but also a catalyst for personal growth,
                  societal progress, and global development. In this blog, we
                  aim to inspire, inform, and engage readers in conversations
                  about the latest trends, insights, and innovations in the
                  field of education.
                </p>
                <blockquote>
                  <p>
                    Join your neighbors for an eco-friendly social gathering as
                    the day comes to a conclusion. Savor refreshments made with
                    sustainable ingredients and have discussions on sustainable
                    life. By fostering a sense of community.
                  </p>
                  <cite>Michel Clarck</cite>
                </blockquote>
                <p className="blog-text mt-5 mb-4">
                  Dinning Prepare a dinner using fresh ingredients from your own
                  garden or the local CSA program. The energy-efficient
                  appliances in your kitchen make cooking a breeze while
                  minimizing your overall energy consumption. Share a meal with
                  neighbors, The quiet night offers a peaceful ambiance,
                  reinforcing the community's commitment to a sustainable,
                  low-impact lifestyle.
                </p>
                <p className="blog-text mt-5 mb-4">
                  Living sustainably at Realar Residence is more than a choice;
                  it's an immersive experience that shapes every moment of your
                  day. From the moment you wake up in your solar-powered home to
                  the evening gatherings with like-minded neighbors
                </p>
                <h3 className="mt-4">
                  The sustainable traveller These 6 hotels epitomise ethical
                  luxury
                </h3>
                <p className="">
                  ‍Whether you work from home or commute to a nearby office, the
                  energy-efficient features of your home contribute to a
                  productive and eco-conscious workday. Smart home systems allow
                  you to monitor and control energy usage, ensuring that your
                  environmental impact remains minimal.
                </p>
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="blog-img">
                      <img
                        className="w-100"
                        src="/img/blog/blog_inner_1.jpg"
                        alt="Blog Image"
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-0">
                  1.Neighborhood: Choosing the ideal neighborhood is an
                  important choice that extends beyond a property's physical
                  characteristics. We'll go over the things to take into account
                  while selecting a neighborhood in this piece, including future
                  growth plans, school districts, and amenities. To make sure
                  that the community you choose fits both your present
                  requirements and your long-term goals, learn how to balance
                  your lifestyle choices and property prices.
                </p>
                <p>
                  2.Buying a first home may be an exciting and daunting
                  experience for those who have never done it before. This blog
                  article serves as a thorough guide to help you through the
                  process of buying your first house. We're here to provide you
                  with useful advice and insights to help you navigate every
                  step of the home-buying process, from comprehending the
                  financial elements to luxury about its all realar properties
                  nuances.
                </p>
                <div className="share-links clearfix">
                  <div className="row justify-content-between">
                    
                    <div className="col-md-auto text-xl-end">
                      <div className="share-links_wrapp">
                        <span className="share-links-title">Share:</span>
                        <div className="social-links">
                          <Link href="https://www.facebook.com/"
                            ><i className="fab fa-facebook-f"> <FontAwesomeIcon icon={faFacebookF}/></i></Link>
                          <Link href="https://www.twitter.com/"
                            ><i><FontAwesomeIcon icon={faTwitter}/> </i></Link>
                          <Link href="https://www.instagram.com/"
                            ><i><FontAwesomeIcon icon={faInstagram}/></i></Link>
                          <Link href="https://www.linkedin.com/"
                            ><i><FontAwesomeIcon icon={faLinkedinIn}/></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit"><i><FontAwesomeIcon icon={faSearch}/> </i></button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <Link href="blog"
                      ><img src="/img/theme-img/map.svg" alt="" />City
                      Tour</Link>
                    <span>(8)</span>
                  </li>
                  <li>
                    <Link href="blog"
                      ><img src="/img/theme-img/map.svg" alt="" />Beach
                      Tours</Link>
                    <span>(6)</span>
                  </li>
                  <li>
                    <Link href="blog"
                      ><img src="/img/theme-img/map.svg" alt="" />Wildlife
                      Tours</Link>
                    <span>(2)</span>
                  </li>
                  <li>
                    <Link href="blog"
                      ><img src="/img/theme-img/map.svg" alt="" />News &
                      Tips</Link>
                    <span>(7)</span>
                  </li>
                  <li>
                    <Link href="blog"
                      ><img
                        src="/img/theme-img/map.svg"
                        alt=""
                      />Adventure Tours</Link>
                    <span>(9)</span>
                  </li>
                  <li>
                    <Link href="blog"
                      ><img src="/img/theme-img/map.svg" alt="" />Mountain
                      Tours</Link>
                    <span>(10)</span>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <Link href="blog-details"
                        ><img
                          src="/img/blog/recent-post-1-1.jpg"
                          alt="Blog Image"
                      /></Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="blog-details"
                          >Exploring The Green Spaces Of the island maldives</Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="blog"
                          ><i><FontAwesomeIcon icon={faCalendarDays}/> </i>22/6/ 2025</Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link href="blog-details"
                        ><img
                          src="/img/blog/recent-post-1-2.jpg"
                          alt="Blog Image"
                      /></Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="blog-details"
                          >Harmony With Nature Of Belgium Tour and travle</Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="blog"
                          ><i><FontAwesomeIcon icon={faCalendarDays}/> </i>25/6/ 2025</Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link href="blog-details"
                        ><img
                          src="/img/blog/recent-post-1-3.jpg"
                          alt="Blog Image"
                      /></Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="blog-details"
                          >Exploring The Green Spaces Of Realar Residence</Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="blog-details"
                          ><i><FontAwesomeIcon icon={faCalendarDays}/> </i>27/6/ 2025</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="widget widget_offer" style={{backgroundImage: "url('/img/bg/widget_bg_1.jpg')", backgroundSize: "cover",     backgroundPosition: "center",}}>
                <div className="offer-banner">
                  <div className="offer">
                    <h6 className="box-title">
                      Need Help? We Are Here To Help You
                    </h6>
                    <div className="banner-logo">
                      <img src="/img/logo2.svg" alt="Tourm" />
                    </div>
                    <div className="offer">
                      <h6 className="offer-title">You Get Online support</h6>
                      <Link className="offter-num" href="%2b256214203215"
                        >+256 214 203 215</Link>
                    </div>
                    <Link href="contact" className="th-btn style2 th-icon"
                      >Read More</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div> 
       
      </div>
    </section>
    
    
    </>
  )
}
