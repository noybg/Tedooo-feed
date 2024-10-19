import axios from "axios";

export type PostData = {
    key: string; 
    id: string;
    userId: string;
    username: string;
    avatar: string;
    shopName?: string;
    shopId?: string;
    text: string;
    likes: number;
    comments: number;
    didLike: boolean;
    date: string;
    images: string[];
};

export type ApiResponse = {
  data: PostData[]; 
  hasMore: boolean;
};

const API_BASE_URL = 'https://backend.tedooo.com/hw/feed.json';

export const getPosts = async (skip: number = 0): Promise<ApiResponse> => {
  try {
    const res = await axios.get<ApiResponse>(`${API_BASE_URL}?skip=${skip}`);     
    return res.data;
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};

export const notifyPostView = async (postId: string) => {
  try {
    await axios.get(`https://backend.tedooo.com/?itemId=${postId}`);
  } catch (error) {
    console.error('Error notifying post view:', error);
  }
};