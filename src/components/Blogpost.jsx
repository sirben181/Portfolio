import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const blogpost = () => {
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
    // console.log(posts)

         posts.map((post)=>{
// console.log(post.title)

    })

  return (

    <div>
         <div className="flex-1">
            <div className="flex flex-col"> 
                <h4 className="text-lg font-bold text-[#000]">{post.title}</h4>
                   <h5 className="text-lg text-[#666]">How the javascript engine works</h5>
                 <p className="text-sm text-[#666]">By John Doe</p>
                 <p className='text-sm'>{post.date}</p>
            </div>
            <div className="flex-1">
                <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
            </div>
            <div className="flex-1">
                     <button className="bg-[#33f033] text-[#000] px-4 py-2 mx-4 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">comment </button>
                      <button className="bg-[#33f033] text-[#000] px-4 py-2 mx-4 rounded-lg shadow-lg hover:bg-[#0e8a0e] hover:text-white transition duration-300">like </button>
            </div>

          
          </div>
          </div>
  )
}

export default blogpost