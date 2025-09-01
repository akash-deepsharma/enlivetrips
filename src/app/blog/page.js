"use client";
import { useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Blog() {
  // Example Blog Data
  const blogPosts = [
    {
      id: 1,
      title: "Living sustainability: A day in the life at realar residence",
      slug: "Living-sustainability-A-day-in-the-life-at-realar-residence",
      author: "David Smith",
      date: "05 May, 2025",
      category: "Tour Guide",
      img: "/img/blog/blog-s-1-1.jpg",
      link: "/blog-details",
      excerpt:
        "Uniquely pursue emerging experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy.",
    },
    {
      id: 2,
      title: "Top 10 Adventure Destinations in 2025",
       slug: "Top-10-Adventure-Destinations-in-2025",
      author: "Emily Johnson",
      date: "20 May, 2025",
      category: "Adventure",
      img: "/img/blog/blog-s-1-2.jpg",
      link: "/blog-details",
      excerpt:
        "Looking for your next great adventure? These destinations offer stunning landscapes, thrilling activities, and unforgettable experiences.",
    },
    {
      id: 3,
      title: "Living sustainability: A day in the life at realar residence",
      slug: "Living-sustainability-A-day-in-the-life-at-realar-residence",
      author: "David Smith",
      date: "05 May, 2025",
      category: "Tour Guide",
      img: "/img/blog/blog-s-1-1.jpg",
      link: "/blog-details",
      excerpt:
        "Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital.",
    },
    {
      id: 4,
      title: "Top 10 Adventure Destinations in 2025",
       slug: "Top-10-Adventure-Destinations-in-2025",
      author: "Emily Johnson",
      date: "20 May, 2025",
      category: "Adventure",
      img: "/img/blog/blog-s-1-2.jpg",
      link: "/blog-details",
      excerpt:
        "Stunning landscapes, thrilling activities, and unforgettable experiences for travelers in 2025.",
    },
    {
      id: 5,
      title: "Living sustainability: A day in the life at realar residence",
      slug: "Living-sustainability-A-day-in-the-life-at-realar-residence",
      author: "David Smith",
      date: "05 May, 2025",
      category: "Tour Guide",
      img: "/img/blog/blog-s-1-1.jpg",
      link: "/blog-details",
      excerpt:
        "Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital.",
    },
    {
      id: 6,
      title: "Top 10 Adventure Destinations in 2025",
      slug: "Top-10-Adventure-Destinations-in-2025",
      author: "Emily Johnson",
      date: "20 May, 2025",
      category: "Adventure",
      img: "/img/blog/blog-s-1-2.jpg",
      link: "/blog-details",
      excerpt:
        "Stunning landscapes, thrilling activities, and unforgettable experiences for travelers in 2025.",
    },
  ];

  // ✅ Pagination logic
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

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
            <h1 className="breadcumb-title">Blog</h1>
            <ul className="breadcumb-menu">
              <li><Link href="/">Home</Link></li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {/* Blog List */}
            <div className="col-xxl-12 col-lg-12">
                <div className="row">
              {currentPosts.map((post) => (
                    <div className="col-xxl-4 col-lg-4 col-md-6"  key={post.id}>
                        <SingleBlog post={post} />
                    </div>
              ))}
              </div>

              {/* ✅ Pagination */}
              <div className="th-pagination">
                <ul>
                  {/* Previous Button (hide on first page) */}
                  {currentPage > 1 && (
                    <li>
                      <Link href="#!" role="button"
                        className="next-page"
                        onClick={() => goToPage(currentPage - 1)}
                      >
                        <img src="/img/icon/arrow-right4.svg" alt="" style={{transform:"scaleX(-1)"}}/> Previous
                      </Link>
                    </li>
                  )}

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                      <Link href="#!" role="button"
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => goToPage(index + 1)}
                      >
                        {index + 1}
                      </Link>
                    </li>
                  ))}

                  {/* Next Button (hide on last page) */}
                  {currentPage < totalPages && (
                    <li>
                      <Link role="button" href="#!"
                        className="next-page"
                        onClick={() => goToPage(currentPage + 1)}
                      >
                        Next <img src="/img/icon/arrow-right4.svg" alt="" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            {/* <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                
                <div className="widget widget_search">
                  <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i><FontAwesomeIcon icon={faSearch} /></i>
                    </button>
                  </form>
                </div>

                
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li><Link href="#">City Tour</Link><span>(8)</span></li>
                    <li><Link href="#">Beach Tours</Link><span>(6)</span></li>
                    <li><Link href="#">Wildlife Tours</Link><span>(2)</span></li>
                    <li><Link href="#">News & Tips</Link><span>(7)</span></li>
                    <li><Link href="#">Adventure Tours</Link><span>(9)</span></li>
                    <li><Link href="#">Mountain Tours</Link><span>(10)</span></li>
                  </ul>
                </div>
              </aside>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
