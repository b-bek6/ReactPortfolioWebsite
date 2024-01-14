const apiKey = 'AIzaSyBPTwKepCOBgUBol92g9QLJQy8rjvin1kI';
const blogId = 'UCfqkTL1RcKTtQXYeI0qHxhA';

import React, { useState, useEffect } from "react";
import Loading from "./Loader/Loading";

// const bloggerUrl= `https://www.googleapis.com/youtube/v3/videos/${blogId}/posts?key=${apiKey}`;
// const bloggerUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${blogId}&maxResults=10&order=date&type=video&key=${apiKey}`
const maxResults = 10;

const videosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${blogId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`;

export default function Blog() {
    const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({});
  const [title, settitle] = useState([])

  useEffect(() => {
    bloggerWithFetch();
  }, []);

  const bloggerWithFetch = async () => {
    try {
      const response = await fetch(videosUrl).then(res=>{
        setIsLoading(false);
        console.log(res)
        return res;
      })
      const jsonData = await response.json();
    //   settitle(jsonData.items);
    //   settitle(jsonData.items[0].snippet.title);
      settitle(jsonData.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(title)

  return (
    <>
    <div className="grid gap-4">
    {
        !isLoading ?<>
        {
          title.map(data=>(
              <a href={`https://www.youtube.com/watch?v=${data.id.videoId}&ab_channel=IMBibek`}>
              {/* <div className="dark:text-primary text-primaryDark">
                  {data.snippet.title}
                  <div className="text-subtext">
                    <img src={`${data.snippet.thumbnails.default.url}`} alt="thumbnail" />
                  </div>
              </div> */}
              <div  class="flex flex-col justify-between sm:flex-row opacity-75 hover:opacity-100  items-center bg-primary  rounded-lg dark:text-white  md:flex-row p-4  dark:bg-darkPrimary transition-all ease-in-out duration-200">
    <img class="object-cover rounded-t-lg w-fit h-auto sm:w-48 sm:h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`${data.snippet.thumbnails.default.url}`} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-start  "> {data.snippet.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.snippet.description? data.snippet.description: 'this video does not have any description'}</p>
    </div>
    <div>
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
      />
    </svg>
    </div>
</div>
              </a>
          ))
        }
        </>
        :
        <Loading/>
    }
     
      </div>
    </>
  );
}
