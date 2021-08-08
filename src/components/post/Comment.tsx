interface CommentProps {
    firstName: string
    lastName: string
    comment: string
};

const Comment: React.FC<CommentProps> = ({ firstName, lastName, comment }) => {

    console.log(firstName)

    return (
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
                <div className="flex flex-1 rounded-xl bg-gray-100 p-2">
                    <p className="text-sm">{firstName} {lastName}</p>
                    <p className="text-sm font-light">{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;