interface ContentProps {
    content: string
};

const Content: React.FC<ContentProps> = ({ content }) => {

    return (
        <div className="flex space-x-4 px-2 items-center">
            <p className="font-light break-all leading-5">{content}</p>
        </div>
    )
}

export default Content;