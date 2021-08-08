import Post from './Post';
import { PostObject, User } from '../../@types/types';

interface PostsProps {
    posts?: PostObject[]
    setPosts: React.Dispatch<React.SetStateAction<undefined>>
    user?: User
};

const Posts: React.FC<PostsProps> = ({ posts, setPosts, user }) => {
    return (
        <div className="">
            {posts 
                ? (posts.map((post) => <Post key={post._id} content={post} posts={posts} setPosts={setPosts} user={user} />))
                : ''
            }
        </div>    
    )
}

export default Posts;