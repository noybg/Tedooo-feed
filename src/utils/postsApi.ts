import axios from "axios";

const API_BASE_URL = 'https://backend.tedooo.com/hw/feed.json';

export const getPosts = async () => {
    try {
        const res = await axios.get(`${API_BASE_URL}`);
        console.log(res.data);
        if (!Array.isArray(res.data)) {
            throw new Error('Data is not an array'); // זרוק שגיאה אם הנתונים אינם מערך
        }
        
        return res.data;
    } catch (error) {
        console.log("Error fetching posts:", error);
        throw error;
    }
};