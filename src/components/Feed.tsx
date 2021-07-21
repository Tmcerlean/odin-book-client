import InputBox from './InputBox';

const Feed: React.FC = () => {
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