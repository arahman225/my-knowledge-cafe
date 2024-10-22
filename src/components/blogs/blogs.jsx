import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";

const Blgos = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="border-t-2 mt-6 grid grid-cols-3">
            <div className="col-span-2">
            {
               blogs.map(blog => <Blog 
                   key={blog.id}
                   blog={blog}
               ></Blog>)
           }
            </div>
            <div>
                
                </div>
        </div>
    );
};

export default Blgos;