import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const blogpost = ({post}) => {
    const { id } = useParams();
// const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     const fetchBlog=async()=>{
//       try{
//         const response = await fetch('http://localhost:5000/Posts');
//         const data = await response.json();
//         // console.log('Fetched blog data:', data);
//         setPosts(data);
//       }
//       catch(error){
//         console.error('Error fetching blog:', error);
//       }
//     }
//     fetchBlog();
//   },[])
//     // console.log(posts)

//          posts.map((post)=>{
// // console.log(post)

//     })

  return (

    <div>
         <div className="flex-1 px-4 py-2 mx-4 m-b-5px my-4 rounded-lg shadow-lg">
            <div className="flex flex-col">
              <span className="text-[#000] text-sm flex"> category:  {post.category}</span>
                <h4 className="text-sm font-bold text-[#000] flex flex-col ">{post.title}</h4><span className=" flex flex-col text-xs text-[#666]">{post.date}</span>
                   <h5 className=" flex flex-col text-xs text-[#666]">{post.subtitle}</h5><span className=" flex flex-col text-xs text-[#666]">by{post.author}</span>
            </div>
            <div className="flex-1 px-3 mx-4">
              <image src={post.image} alt="blog" className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-xs ">{post.content}</p>
             
            </div>
          </div>
          </div>
  )
}

export default blogpost