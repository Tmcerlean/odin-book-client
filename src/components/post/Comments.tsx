interface CommentsProps {
    submitPost:
    commentContent:
    setCommentContent:
    commentInput:
};

const Comments: React.FC<CommentsProps> = ({ submitPost, commentContent, setCommentContent, commentInput }) => {

    return (
        <div className="">
            <div className="flex relative mt-2">
                <img 
                    className="rounded-full mr-1"
                    src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                    alt=""
                    width="40"
                    height="40"
                />
                <form className="flex flex-1" onSubmit={submitPost}>
                    <input 
                        type="text" 
                        placeholder="Add a comment..."
                        className="rounded-full bg-gray-100 flex-grow px-5 border-none focus:outline-none"
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        ref={commentInput}
                    />
                </form>
                <div className="absolute bottom-0 left-7 bg-green-400 border-2 border-white h-3 w-3 rounded-full"></div>
            </div>
        </div>
    )
}

export default Comments;