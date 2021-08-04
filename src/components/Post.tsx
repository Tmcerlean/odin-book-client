import formatDistance from "date-fns/formatDistance";
import { PostObject } from '../@types/types';

interface PostProps {
    key: string
    content: PostObject
};

const Post: React.FC<PostProps> = ({ content }) => {
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
        </div>
    )
}

export default Post;