import { api } from "./config";

// Get all blogs
export async function getBlogs(page = 1, perPage = 10) {
  try {
    const res = await api.get("/blogs", {
      params: { page, per_page: perPage },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}
export async function getSingleBlog(slug) {
  try {
    const res = await api.get(`/blogs/${slug}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blog");
  }
}
