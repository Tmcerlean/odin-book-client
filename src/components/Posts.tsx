import Post from './Post';
import { PostObject } from '../@types/types';

interface PostsProps {
    posts?: PostObject[]
};

const Posts: React.FC<PostsProps> = ({ posts }) => {
    return (
        <div className="">
            {posts 
                ? (posts.map((post) => <Post key={post._id} content={post} />))
                : ''
            }
            {/* Iterate through posts props
            Render post component */}
        </div>    
    )
}

export default Posts;