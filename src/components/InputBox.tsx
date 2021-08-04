import { useState } from "react";
import { CameraIcon } from "@heroicons/react/solid";
import getBearerToken from "../util/getBearerToken";

const InputBox: React.FC = () => {

    const [postContent, setPostContent] = useState("");

    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = { content: postContent };
        const formData = JSON.stringify(data);

        try {

            const userObject = await localStorage.getItem("user") || '';
            const bearerToken = await getBearerToken(userObject);

            const req = await fetch(
                "http://localhost:5000/api/posts",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": bearerToken
                    }
                }
            );

            const jsonPostData = await req.json();

            // Use post data to update current post state

            // Error handling
            if (req.status !== 200) {
                // setPostErr(true);
                return;
            }
        } catch (err) {
            console.log(err)
            // setPostErr(true);
        }
    }

    return (
        <div className="bg-white mt-6 p-2 rounded-2xl shadow-sm text-gray-500 font-medium">
            <div className="flex space-x-4 p-2 items-center">
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
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </form>
            </div>
            <div className="flex justify-center pt-2 border-t">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center rounded-lg cursor-pointer">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Add Photo</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;