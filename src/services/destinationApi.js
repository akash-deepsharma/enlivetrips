import { api } from "./config";

export async function getHomeDestination() {
  try {
    const res = await api.get("/destinations/home");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}
export async function getDestination() {
  try {
    const res = await api.get("/destinations");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}