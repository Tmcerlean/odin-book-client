import React, { useEffect, useRef, useState } from 'react';
import { PostObject, User } from '../../@types/types';
import getBearerToken from '../../util/getBearerToken';
import Actions from './Actions';
import Comments from './Comments';
import Content from './Content';
import Data from './Data';
import Header from './Header';

interface PostProps {
    key: string
    content: PostObject
    posts?: PostObject[]
    setPosts: React.Dispatch<React.SetStateAction<undefined>>
    user?: User
};

const Post: React.FC<PostProps> = ({ content, posts, setPosts, user }) => {

    const [commentsQuantity, setCommentsQuantity] = useState(content.comments.length)
    const [likesQuantity, setLikesQuantity] = useState(content.likes.length)
    const [userLikedPost, setUserLikedPost] = useState(false);

    const commentInput = useRef<HTMLInputElement>(null);

    const handleFocus = () => commentInput?.current?.focus();

    const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        console.log(content)
    }, [content])

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
            
            // Toggle like value +/- 1
            userLikedPost ? setLikesQuantity(likesQuantity - 1) : setLikesQuantity(likesQuantity + 1);

            // Need to update posts state
            console.log("working");

        } catch (err) {
            console.log(err)
            // setLoginErr(true);
        }
    };

    return (
        <div className="bg-white mt-4 p-2 rounded-2xl shadow-sm text-black font-medium">
            <Header firstName={content.author.firstName} lastName={content.author.lastName} timestamp={content.timestamp} />
            <Content content={content.content} />
            <Data likesQuantity={likesQuantity} commentsQuantity={commentsQuantity} />
            <Actions handleFocus={handleFocus} handleToggleLike={handleToggleLike} userLikedPost={userLikedPost} postId={content._id} />
            <Comments postId={content._id} submitPost={submitPost} posts={posts} setPosts={setPosts} commentInput={commentInput} comments={content.comments} />
        </div>
    )
}

export default Post;