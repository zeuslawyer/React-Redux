import axios from "axios";


// this file configures the axios instance and 
//exports a pre-configured instance for use elsewhere

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS
  }
});
