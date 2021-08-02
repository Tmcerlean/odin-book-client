import { useEffect, useState } from 'react';
import InputBox from './InputBox';
import { User } from '../@types/types';

interface FeedProps {
    user: User
    setUser: React.Dispatch<User>
};

const Feed: React.FC<FeedProps> = ({ user, setUser }) => {

    const [posts, setPosts] = useState();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const req = await fetch(
                    "http://localhost:5000/api/posts",
                );
                if (req.status !== 200) {
                    return;
                }
                const reqJson = await req.json();
                setPosts(reqJson.posts);
            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
    }, []);

    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <InputBox />
                {/* Posts */}
            </div>    
        </div>
    )
}

export default Feed;