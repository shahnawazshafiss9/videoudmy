import axios from "axios";
const KEY = 'AIzaSyCSdJU_qoZvu-QdFEiGz4tPrufwvZBOpEk';
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});