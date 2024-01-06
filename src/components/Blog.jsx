// import React from 'react'

// export default function Blog() {
//     return (
//         <div>
//             <p><i><u>In the heart of the majestic Himalayan region lies a hidden gem that captivates both the eyes and the taste buds—the Golden Himalayan Raspberry. This exquisite fruit, also known as Rubus ellipticus, is a rare variant of the more common red raspberry. With its unique golden hue and distinct flavor profile, the Golden Himalayan Raspberry has become a sought-after delicacy for those who appreciate the beauty and diversity of nature's bounty.</u></i></p><p></p>
//             <div className="separator" style={{ clear: 'both', textAlign: 'center' }}>
//                 <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx8N0vOj0JDW8jPoyqpL0e_W5YwrdRMYhufSK95VWPfF3HOl0wVQHP5sPwauVCC5JLkpyuxWvCIglMO_hH_lmO3np9agqCBXS7yJ4gJ-a99_0f852ub_eRZWJBvOtBTg6hg3UPo58rTfkC6_443b-8OV7ss3Gy9AcWGxLj4qBHydwlypCDTOBfXX2HU22A/s4032/IMG_5956.HEIC"
//                     style={{ marginLeft: '1em', marginRight: '1em' }}>

//                     <img border="0" data-original-height="4032" data-original-width="3024" height="256" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx8N0vOj0JDW8jPoyqpL0e_W5YwrdRMYhufSK95VWPfF3HOl0wVQHP5sPwauVCC5JLkpyuxWvCIglMO_hH_lmO3np9agqCBXS7yJ4gJ-a99_0f852ub_eRZWJBvOtBTg6hg3UPo58rTfkC6_443b-8OV7ss3Gy9AcWGxLj4qBHydwlypCDTOBfXX2HU22A/w192-h256/IMG_5956.HEIC" width="192" />
//                 </a>
//             </div>
//             <b>Origin and Growth:</b><p></p><p>The Golden Himalayan Raspberry is native to the Himalayan mountain range, thriving in the cool and temperate climates found at higher altitudes. This region provides the ideal conditions for the raspberry to flourish, with well-drained soil, ample sunlight, and the crisp mountain air contributing to its growth.</p><p>The plant itself is a woody shrub with thorny branches, producing delicate white flowers that eventually give way to the golden-hued berries. The berries are known for their sweet and slightly tangy flavor, making them a unique and delectable addition to the world of berries.</p><p><b>Culinary Delight:</b></p><p>The culinary potential of the Golden Himalayan Raspberry is vast. Its vibrant color adds a touch of elegance to various dishes, making it a favorite among chefs and culinary enthusiasts. The berries can be enjoyed fresh, adding a burst of sweetness to salads, desserts, and beverages.</p><p>One popular way to showcase the Golden Himalayan Raspberry is through jams and preserves. The natural sweetness of the berries combines with their golden color, creating a visually stunning and flavorful spread for toast or pastries. Additionally, the berries can be used in sauces, syrups, and even as a unique topping for ice cream or yogurt.</p><p><b>Nutritional Benefits:</b></p><p>Beyond its delectable taste and aesthetic appeal, the Golden Himalayan Raspberry boasts a range of nutritional benefits. Like its red counterpart, it is rich in antioxidants, vitamins, and minerals. The berries are a good source of vitamin C, manganese, and dietary fiber, contributing to overall health and well-being.</p><p>Furthermore, the antioxidants found in Golden Himalayan Raspberries have been linked to various health benefits, including anti-inflammatory properties and potential protective effects against certain diseases. Incorporating these golden berries into your diet can be a delicious way to boost your nutritional intake.</p><p><b>Cultivation and Sustainability:</b></p><p>Cultivating Golden Himalayan Raspberries requires careful attention to environmental factors and sustainable practices. The plants are sensitive to changes in temperature and moisture levels, necessitating thoughtful cultivation methods. Organic farming practices not only preserve the natural flavors of the berries but also contribute to the overall health of the ecosystem.</p><p>As consumer interest in unique and exotic fruits continues to grow, there is an opportunity to develop sustainable cultivation methods that support both the environment and local communities. By embracing responsible farming practices, the Golden Himalayan Raspberry can continue to thrive and delight generations to come.</p><p><b>Conclusion:</b></p><p>The Golden Himalayan Raspberry stands as a testament to the wonders of nature, offering not only a visual feast for the eyes but also a symphony of flavors for the palate. From its humble origins in the Himalayas to its presence on culinary tables around the world, this golden gem has found its place as a cherished and sought-after fruit. Whether enjoyed fresh, preserved, or incorporated into various dishes, the Golden Himalayan Raspberry is a true delight that continues to enchant and inspire those fortunate enough to experience its golden brilliance.</p>        </div>
//     )
// }

const apiKey = 'AIzaSyBPTwKepCOBgUBol92g9QLJQy8rjvin1kI';
const blogId = '6934153127728005078';

import React, { useState, useEffect } from "react";

const bloggerUrl= `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&fields=items(title,published,id)`;

export default function Blog() {
  const [userData, setUserData] = useState({});
  const [title, settitle] = useState([])

  useEffect(() => {
    bloggerWithFetch();
  }, []);

  const bloggerWithFetch = async () => {
    try {
      const response = await fetch(bloggerUrl);
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    //   const jsonData = await response.json();
      const jsonData = await response.json();
      console.log(jsonData);
      settitle(jsonData.items);
    //   console.log(JSON.stringify(jsonData.items[0].content, null, 2));
      setUserData(jsonData.items[0].content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
    <div>

    </div>
      {/* <p>{userData && userData}</p> */}
      {/* <div dangerouslySetInnerHTML={{ __html: userData }} /> */}
      {/* {userData} */}
      <div className="grid gap-4">

        

      {
        title.map(data=>(
            <a href={`/blog/${data.id}`}>
            <div className="text-primary">
                {data.title}
                <div className="text-subtext">
                    {(data.published).substring(0, 10)}
                </div>
            </div>
            </a>
        ))
      }
      </div>
      
      {/* You might need to update the code here based on the actual structure of your data */}
    </>
  );
}
