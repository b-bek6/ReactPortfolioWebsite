import { useParams } from 'react-router-dom';
import Loading from '../components/Loader/Loading';



import React, { useState, useEffect } from "react";




export default function SingleBlogs() {
  const [loading, setLoading] = useState(true)
  
  const { id } = useParams();
  
  console.log('Blog ID:', id);
  
  const [userData, setUserData] = useState({});
  const [title, settitle] = useState([])

  const apiKey = 'AIzaSyBPTwKepCOBgUBol92g9QLJQy8rjvin1kI';
  const blogId = '6934153127728005078';
  const postId = id;
  const bloggerUrl= `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}`;
  
  useEffect(() => {
    bloggerWithFetch();
  }, []);

  const bloggerWithFetch = async () => {
    try {
      const response = await fetch(bloggerUrl).then(res=>{
        setLoading(false);
        return res
      });
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);
      settitle(jsonData.title);
      setUserData(jsonData.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className='container mt-10 text-left  dark:text-primary text-darkPrimary'>
    {
      !loading ?
      <>
      <div className='mb-4 text-2xl dark:text-primary text-darkPrimary border-0 font-bold'>
        {title}
      </div>

        <div dangerouslySetInnerHTML={{ __html: userData }} />
      </>
      :
      <div>
        <Loading/>
    </div>
    }
    
    </div>
    
    </>
  );
}
