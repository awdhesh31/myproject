/** @format */

import axios from "axios";

const KEY = "AIzaSyB4ch7D9rGfwr2OfZ503LdYUpu3U-CGjv0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  },
});
