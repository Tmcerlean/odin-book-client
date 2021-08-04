import { useState } from "react";
import formatDistance from "date-fns/formatDistance";
import { PostObject } from '../@types/types';
import { ChatIcon, ThumbUpIcon } from "@heroicons/react/outline";

interface PostProps {
    key: string
    content: PostObject
};

const Post: React.FC<PostProps> = ({ content }) => {


    const [commentContent, setCommentContent] = useState("");

    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

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
                <div className="flex flex-1 justify-center m-1 p-2 items-center hover:bg-gray-100 cursor-pointer rounded-sm">
                    <ThumbUpIcon className="h-5 text-gray-600 mr-1" />
                    <p className="text-xs sm:text-sm xl:text-base text-gray-600">Like</p>
                </div>
                <div className="flex flex-1 justify-center m-1 p-2 items-center hover:bg-gray-100 cursor-pointer rounded-sm">
                    <ChatIcon className="h-5 text-gray-600 mr-1" />
                    <p className="text-xs sm:text-sm xl:text-base text-gray-600">Comment</p>
                </div>
            </div>
            <div className="">
                <div className="flex">
                    <img 
                        className="rounded-full"
                        src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                        alt=""
                        width="40"
                        height="40"
                    />
                    <form className="flex flex-1" onSubmit={submitPost}>
                        <input 
                            type="text" 
                            placeholder="What's your story?"
                            className="rounded-full h-12 bg-gray-100 flex-grow px-5 border-none focus:outline-none"
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post;