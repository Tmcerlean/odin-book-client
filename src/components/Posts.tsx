import Post from './Post';
import { PostObject, User } from '../@types/types';

interface PostsProps {
    posts?: PostObject[]
    user?: User
};

const Posts: React.FC<PostsProps> = ({ posts, user }) => {
    return (
        <div className="">
            {posts 
                ? (posts.map((post) => <Post key={post._id} content={post} user={user} />))
                : ''
            }
            {/* Iterate through posts props
            Render post component */}
        </div>    
    )
}

export default Posts;