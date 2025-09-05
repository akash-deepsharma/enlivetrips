
import { api } from "./config";

// Get all blogs
export async function getPagewithSection(pageId, sectionKey = false) {
  try {
    const res = await api.get(sectionKey ? `pages/${pageId}/${sectionKey}` : `pages/${pageId}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}