import { ChatIcon, ThumbUpIcon } from '@heroicons/react/outline';
import { ThumbUpIcon as ThumbUpIconSolid } from '@heroicons/react/solid';

interface ActionsProps {
    handleFocus: () => void
    handleToggleLike: (postId: string) => void
    userLikedPost: boolean
    postId: string
};

const Actions: React.FC<ActionsProps> = ({ handleFocus, handleToggleLike, userLikedPost, postId }) => {

    return (
        <div className="flex justify-between mt-2 border-t border-b">
            <div 
                className="flex flex-1 justify-center m-1 p-2 hover:bg-gray-100 cursor-pointer rounded-sm"
                onClick={() => handleToggleLike(postId)}
            >
                {userLikedPost ? <ThumbUpIconSolid className="h-5 text-blue-600 mr-1" /> : <ThumbUpIcon className="h-5 text-gray-600 mr-1" />}
                {userLikedPost ? <p className="text-xs sm:text-sm xl:text-base text-blue-600">Like</p> : <p className="text-xs sm:text-sm xl:text-base text-gray-600">Like</p>}
            </div>
            <div 
                className="flex flex-1 justify-center m-1 p-2 hover:bg-gray-100 cursor-pointer rounded-sm"
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
    )
}

export default Actions;