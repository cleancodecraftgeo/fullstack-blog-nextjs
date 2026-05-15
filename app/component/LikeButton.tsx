"use client"
import { useState } from "react"

export default function LikeButton(){
    const [liked,setLiked] = useState(false)
    const [count,setCount] = useState(0)
    
    function handleLike(){
        setLiked(!liked)
        setCount(liked ? count-1:count+1)
    }
    return (
        <button
        onClick={handleLike}
        className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition ${
            liked 
                    ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"
            }`}>
                {liked ? "❤️" : "🤍"} {liked ? count :""} Like
            </button>
    )
}