import { api } from "./config";

export async function trendingPackage() {
  try {
    const res = await api.get("/packages/trending");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}

export async function allPackage() {
  try {
    const res = await api.get("/packages");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
}