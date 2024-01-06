const apiKey = 'AIzaSyBPTwKepCOBgUBol92g9QLJQy8rjvin1kI';
const blogId = '6934153127728005078';

import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const bloggerUrl= `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&fields=items(title,published,id)`;

export default function Blog() {
    const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({});
  const [title, settitle] = useState([])

  useEffect(() => {
    bloggerWithFetch();
  }, []);

  const bloggerWithFetch = async () => {
    try {
      const response = await fetch(bloggerUrl).then(res=>{
        setIsLoading(false);
        return res;
      })
      const jsonData = await response.json();
      settitle(jsonData.items);
      setUserData(jsonData.items[0].content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    <div className="grid gap-4">
    {
        !isLoading ?<>
        {
          title.map(data=>(
              <a href={`/blog/${data.id}`}>
              <div className="dark:text-primary text-primaryDark">
                  {data.title}
                  <div className="text-subtext">
                      {(data.published).substring(0, 10)}
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
