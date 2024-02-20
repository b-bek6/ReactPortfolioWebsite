const apiKey = 'AIzaSyBPTwKepCOBgUBol92g9QLJQy8rjvin1kI';
const blogId = 'UCfqkTL1RcKTtQXYeI0qHxhA';

import React, { useState, useEffect } from "react";
import Loading from "./Loader/Loading";

// const bloggerUrl= `https://www.googleapis.com/youtube/v3/videos/${blogId}/posts?key=${apiKey}`;
// const bloggerUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${blogId}&maxResults=10&order=date&type=video&key=${apiKey}`
const maxResults = 10;

const meta = 'https://graph.instagram.com/me?fields=id,username,profile_picture_url,followers_count&access_token=ffbf8222c6a0cee54c2ae20139f59ff7';

const videosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${blogId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`;

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({});
  const [title, settitle] = useState([])

  useEffect(() => {
    metauser();
    bloggerWithFetch();
  }, []);
  
  const metauser = async () => {
    const response = await fetch (meta).then(res => {console.log("meta: user details:",res)})

  }

  const bloggerWithFetch = async () => {
    try {
      const response = await fetch(videosUrl).then(res => {
        setIsLoading(false);
        console.log(res)
        return res;
      })
      const jsonData = await response.json();
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
          !isLoading ? <>
            {
              title.map(data => (
                <a href={`https://www.youtube.com/watch?v=${data.id.videoId}&ab_channel=IMBibek`}>
                  <div class="flex justify-between items-center ">

<div className="flex items-center">

                    <img class="object-cover h-20 w-20 " src={`${data.snippet.thumbnails.default.url}`} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="dark:text-primary text-primaryDark"> {data.snippet.title}</h5>
                      <p class="text-subtext">{(data.snippet.publishedAt).substring(0, 10)}</p>
                    </div>
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
            <Loading />
        }

      </div>
    </>
  );
}
