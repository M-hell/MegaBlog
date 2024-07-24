import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  const { userData: userdata } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (userdata) {
      setUsername(userdata.name);
    }
  }, [userdata]);

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className='rounded-xl' 
          />
        </div>
        <h2 className='text-2xl font-bold'>{title}</h2>
        {userdata && <h3 className='text-xl'>posted by {username}</h3>}
      </div>
    </Link>
  );
}

export default PostCard;
