import React, { useEffect, useRef, useState } from "react";
import formatDistance from "date-fns/formatDistance";
import { PostObject, User } from '../@types/types';
import { ChatIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpIconSolid } from "@heroicons/react/solid";
import getBearerToken from "../util/getBearerToken";

interface PostProps {
    key: string
    content: PostObject
    user?: User
};

const Post: React.FC<PostProps> = ({ content, user }) => {

    const [commentContent, setCommentContent] = useState("");
    const [userLikedPost, setUserLikedPost] = useState(false);

    const commentInput = useRef<HTMLInputElement>(null);

    const handleFocus = () => commentInput?.current?.focus();

    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        // Set state for whether user has liked post previously
        if (user) {
            content.likes.includes(user.id) ? setUserLikedPost(true) : setUserLikedPost(false)
        }
    }, [content, user]);

    const handleToggleLike = async (postId: string) => {

        try {
            const userObject = await localStorage.getItem("user") || '';
            const bearerToken = await getBearerToken(userObject);

            const req = await fetch(
                `http://localhost:5000/api/posts/${postId}/like`,
                {
                    method: "PUT",
                    headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": bearerToken
                    },
                }
            );

            const jsonPostData = await req.json();

            console.log(jsonPostData);

            // Set toggle likes boolean
            setUserLikedPost(prevUserLikedPost => !prevUserLikedPost);
            
            // Set likes +/- 1

            // Need to update posts state
            console.log("working");

        } catch (err) {
            console.log(err)
            // setLoginErr(true);
        }
    };

    return (
        <div className="bg-white mt-4 p-2 rounded-2xl shadow-sm text-black font-medium">
            <div className="flex space-x-4 p-2 items-center">
                <img 
                    className="rounded-full"
                    src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                    alt=""
                    width="40"
                    height="40"
                />
                <div>
                    <p>{content.author.firstName} {content.author.lastName}</p>
                    <p className="text-xs">{formatDistance(new Date(content.timestamp), new Date(), {addSuffix: true,})}</p>
                </div>
            </div>
            <div className="flex space-x-4 px-2 items-center">
                <p className="font-light break-all leading-5">{content.content}</p>
            </div>
            <div className="flex justify-between mt-2 border-t border-b">
                <div 
                    className="flex flex-1 justify-center m-1 p-2 items-center hover:bg-gray-100 cursor-pointer rounded-sm"
                    onClick={() => handleToggleLike(content._id)}
                >
                    {userLikedPost ? <ThumbUpIconSolid className="h-5 text-blue-600 mr-1" /> : <ThumbUpIcon className="h-5 text-gray-600 mr-1" />}
                    <p className="text-xs sm:text-sm xl:text-base text-gray-600">Like</p>
                </div>
                <div 
                    className="flex flex-1 justify-center m-1 p-2 items-center hover:bg-gray-100 cursor-pointer rounded-sm"
                    onClick={handleFocus}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleFocus();
                        }
                    }}
                >
                    <ChatIcon className="h-5 text-gray-600 mr-1" />
                    <p className="text-xs sm:text-sm xl:text-base text-gray-600">Comment</p>
                </div>
            </div>
            <div className="">
                <div className="flex relative mt-2">
                    <img 
                        className="rounded-full mr-1"
                        src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                        alt=""
                        width="40"
                        height="40"
                    />
                    <form className="flex flex-1" onSubmit={submitPost}>
                        <input 
                            type="text" 
                            placeholder="Add a comment..."
                            className="rounded-full bg-gray-100 flex-grow px-5 border-none focus:outline-none"
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                            ref={commentInput}
                        />
                    </form>
                    <div className="absolute bottom-0 left-7 bg-green-400 border-2 border-white h-3 w-3 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Post;