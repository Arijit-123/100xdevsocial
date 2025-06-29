'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Heart, Repeat2, Share } from 'lucide-react'
import Image from 'next/image'
import { fetchpostfeed } from '../../../lib/actions/postAction'
type Tweet = {
  authorId: string
  content: string
}

const dummyTweets: Tweet[] = [
  {
   authorId:'1',
   content:'this is test content',
  },
]
//   {
//     id: '2',
//     user: {
//       name: 'Tech Enthusiast',
//       handle: '@techie',
//       profilePic: '/default-avatar.png',
//     },
//     content: 'Just tried the new GPT model and it’s crazy fast!',
//     timestamp: '1d ago',
//     mediaUrl: '/demo-post-image.png',
//   },
//     {
//     id: '3',
//     user: {
//       name: 'Tech Enthusiast',
//       handle: '@techie',
//       profilePic: '/default-avatar.png',
//     },
//     content: 'Just tried the new GPT model and it’s crazy fast!',
//     timestamp: '1d ago',
//     mediaUrl: '/demo-post-image.png',
//   },
// ]

export default  function Feed() {


  const [tweets, setTweets] = useState<Tweet[]>(dummyTweets)



useEffect(() => {
const loadPosts= async ()=>{
  try{
const data= await fetchpostfeed();
setTweets(data.data.posts);
  console.log( data);

  }catch(error){
console.error("Error fetching posts:", error);
  }
}
loadPosts();
}, [])

  return (
    <div className="w-full max-w-2xl mx-auto">
      {tweets?.map((tweet) => (
        console.log("tweet", tweet),
        <div
          key={tweet.authorId}
          className="flex gap-4 border-b border-gray-200 dark:border-gray-700 p-4"
        >
          {/* <Image
            src={tweet.user.profilePic}
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full"
          /> */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">{tweet.authorId}</span>

             
            </div>
            <p className="mt-1 text-base">{tweet.content}</p>
            {/* {tweet.mediaUrl && (
              <Image
                src={tweet.mediaUrl}
                alt="Media"
                width={500}
                height={280}
                className="rounded-xl mt-2"
              />
            )} */}
            <div className="flex gap-6 mt-3 text-gray-500 text-sm">
              <button className="flex items-center gap-1 hover:text-blue-500">
                <MessageCircle size={16} /> Reply
              </button>
              <button className="flex items-center gap-1 hover:text-green-500">
                <Repeat2 size={16} /> Retweet
              </button>
              <button className="flex items-center gap-1 hover:text-pink-500">
                <Heart size={16} /> Like
              </button>
              <button className="flex items-center gap-1 hover:text-gray-700">
                <Share size={16} /> Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
