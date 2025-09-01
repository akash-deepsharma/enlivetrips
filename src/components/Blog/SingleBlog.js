import { faCalendarDays, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function SingleBlog(post) {
  console.log("Post", post);
  return (
    
        <div className="th-blog blog-single has-post-thumbnail">
          <div className="blog-img">
            <Link href="blog-details">
              <img src={post.post.img} alt="Blog Image" />
            </Link>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <Link className="author" href="blog">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by {post.post.author}
              </Link>
              <Link href="blog">
                <i className="fa-solid fa-calendar-days">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </i>
                {post.post.date}
              </Link>
              <Link className="blog-details" href="#!">
                <img src="/img/icon/map.svg" alt="" />
                {post.post.category}
              </Link>
            </div>
            <h2 className="blog-title">
              <Link href={`blog/${post.post.slug}`}>{post.post.title}</Link>
            </h2>
            <p className="blog-text">{post.post.excerpt}</p>
            <Link href={`blog/${post.post.slug}`} className="th-btn style4 th-icon">
              Read More
            </Link>
          </div>
        </div>
  );
}
