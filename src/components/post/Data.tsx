interface DataProps {
    likesQuantity: number
    commentsQuantity: number
};

const Content: React.FC<DataProps> = ({ likesQuantity, commentsQuantity }) => {

    return (
        <div className="flex justify-between mt-2 border-t">
                <div className="flex flex-1 mt-2 ml-2 font-normal text-sm">
                    <p className="">{likesQuantity === 1 ? `${likesQuantity} like` : `${likesQuantity} likes`}</p>
                </div>
                <div className="flex flex-1 mt-2 mr-2 justify-end font-normal text-sm">
                    <p className="">{commentsQuantity === 1 ? `${commentsQuantity} comment` : `${commentsQuantity} comments`}</p>
                </div>
        </div>
    )
}

export default Content;