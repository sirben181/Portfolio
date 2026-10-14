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
         <div className="flex-1 bg-[#F0F0F0] text-[#000] px-4 py-2 mx-4 my-4 rounded-lg shadow-lg">
            <div className="flex flex-col">
                <h4 className="text-lg font-bold text-[#000]">{post.title}</h4>
                   <h5 className="text-lg text-[#666]">{post.subtitle}</h5>
                 <p className="text-sm text-[#666]">{post.authors}</p>
                 <p className='text-sm'>{post.date}</p>
            </div>
            <div className="flex-1 px-3 mx-4
            ">
                <p className="text-lg ">{post.content}</p>
             
            </div>
            <div className="flex-1 flex-end justify-end px-3 mx-4 my-4">
                     <button className="bg-[#33f033] text-lg text-[#000] px-4 py-2 mx-4  my-4 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">comment </button>
                      <button className="bg-[#33f033] text-[#000] px-4 py-2 mx-4 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">like </button>
            </div>

          
          </div>
          </div>
  )
}

export default blogpost