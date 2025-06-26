'use client'

import { useState } from 'react'
import { MessageCircle, Heart, Repeat2, Share } from 'lucide-react'
import Image from 'next/image'

type Tweet = {
  id: string
  user: {
    name: string
    handle: string
    profilePic: string
  }
  content: string
  timestamp: string
  mediaUrl?: string
}

const dummyTweets: Tweet[] = [
  {
    id: '1',
    user: {
      name: 'Arijit Karan',
      handle: '@arijitkaran',
      profilePic: '/default-avatar.png',
    },
    content: 'Excited to launch my new startup idea 🚀',
    timestamp: '2h ago',
    mediaUrl: '',
  },
  {
    id: '2',
    user: {
      name: 'Tech Enthusiast',
      handle: '@techie',
      profilePic: '/default-avatar.png',
    },
    content: 'Just tried the new GPT model and it’s crazy fast!',
    timestamp: '1d ago',
    mediaUrl: '/demo-post-image.png',
  },
    {
    id: '3',
    user: {
      name: 'Tech Enthusiast',
      handle: '@techie',
      profilePic: '/default-avatar.png',
    },
    content: 'Just tried the new GPT model and it’s crazy fast!',
    timestamp: '1d ago',
    mediaUrl: '/demo-post-image.png',
  },
]

export default function Feed() {
  const [tweets, setTweets] = useState<Tweet[]>(dummyTweets)

  return (
    <div className="w-full max-w-2xl mx-auto">
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          className="flex gap-4 border-b border-gray-200 dark:border-gray-700 p-4"
        >
          <Image
            src={tweet.user.profilePic}
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">{tweet.user.name}</span>
              <span className="text-gray-500">{tweet.user.handle}</span>
              <span className="text-gray-400">· {tweet.timestamp}</span>
            </div>
            <p className="mt-1 text-base">{tweet.content}</p>
            {tweet.mediaUrl && (
              <Image
                src={tweet.mediaUrl}
                alt="Media"
                width={500}
                height={280}
                className="rounded-xl mt-2"
              />
            )}
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
