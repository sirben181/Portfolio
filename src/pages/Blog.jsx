import {useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom'
import Blogpost from '../components/blogpost'


const Blog = () => {
  const { id } = useParams();
const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchBlog=async()=>{
      try{
        const response = await fetch('http://localhost:5000/Posts');
        const data = await response.json();
        // console.log('Fetched blog data:', data);
        setPosts(data);
      }
      catch(error){
        console.error('Error fetching blog:', error);
      }
    }
    fetchBlog();
  },[])
    console.log(posts)
    posts.map((post)=>{
console.log(post.title)

    })
  return (
    <div className=" container  flex  flex-col max-w-4xl mx-auto px-4 py-8 my-20 h-full "  >
        <div className=" min-h-screen justify-content-center text-center color-[#000] text-3xl font-bold mb-10 h-100vh w-300vh bg-[F0F0F0] rounded-lg shadow-lg p-10 flex flex-col mx-20">
       <Blogpost />
        </div>
      </div>
  )
}

export default Blog