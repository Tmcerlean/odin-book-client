import { useState } from 'react';
import getBearerToken from '../../util/getBearerToken';
import { CommentObject, PostObject } from '../../@types/types';
import Comment from './Comment';

interface CommentsProps {
    postId: string
    submitPost: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    posts?: PostObject[] | undefined
    setPosts: React.Dispatch<React.SetStateAction<undefined>>
    commentInput: React.RefObject<HTMLInputElement>
    comments: CommentObject[]
};

const Comments: React.FC<CommentsProps> = ({ postId, submitPost, posts, setPosts, commentInput, comments }) => {

    const [commentContent, setCommentContent] = useState("");

    const submitComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = { content: commentContent };
        const formData = JSON.stringify(data);      

        try {

            const userObject = await localStorage.getItem("user") || '';
            const bearerToken = await getBearerToken(userObject);

            const req = await fetch(
                `http://localhost:5000/api/posts/${postId}/comments`,
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

            const jsonCommentData = await req.json();

            console.log(jsonCommentData);

            // Use comment data to update current post state
            if (posts) {
                const updatedPosts = [...posts];
                const relPostInd = updatedPosts.findIndex((post) => post._id === postId);
                updatedPosts[relPostInd].comments = [
                  ...updatedPosts[relPostInd].comments,
                  jsonCommentData.comment,
                ];
                setPosts(updatedPosts as any);
            }

            // Error handling
            if (req.status !== 200) {
                // setCommentErr(true);
                return;
            }
        } catch (err) {
            console.log(err)
            // setCommentErr(true);
        }
    }

    return (
        <div className="">
            {comments 
                ? (comments.map((comment) => <Comment firstName={comment.author.firstName} lastName={comment.author.lastName} comment={comment.comment} />))
                : ''
            }
            <div className="flex relative mt-2">
                <div className="flex items-start">
                    <img 
                        className="rounded-full mr-1"
                        src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                        alt=""
                        width="30"
                        height="30"
                    />
                </div>
                <div className="flex flex-1">
                    <div className="rounded-xl bg-gray-100 p-2">
                        <p className="text-sm">Thomas McErlean</p>
                        <p className="text-sm font-light">Here is a test post Here is a test post Here is a test post Here is a test post Here is a test post Here is a test post Here is a test post</p>
                    </div>
                </div>
            </div>
            <div className="flex relative mt-2">
                <div className="flex items-center">
                    <img 
                        className="rounded-full mr-1"
                        src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                        alt=""
                        width="30"
                        height="30"
                    />
                    <div className="absolute bottom-1 left-5 bg-green-400 border-2 border-white h-3 w-3 rounded-full"></div>
                </div>
                <form className="flex flex-1" onSubmit={submitComment}>
                    <input 
                        type="text" 
                        placeholder="Add a comment..."
                        className="rounded-full bg-gray-100 flex-grow px-5 border-none focus:outline-none"
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        ref={commentInput}
                    />
                </form>
            </div>
        </div>
    )
}

export default Comments;