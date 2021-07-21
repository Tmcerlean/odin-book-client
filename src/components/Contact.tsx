interface ContactProps {
    key: string
    src: string
    name: string
};

const Contact: React.FC<ContactProps> = ({ src, name }) => {
    return (
        <div className="flex items-center space-x-3 mb-2 p-2 relative hover:bg-gray-200 cursor-pointer rounded-xl">
            <img 
                className="rounded-full object-cover"
                src={src}
                alt=""
                width={50}
                height={50}
            />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
        </div>
    )
}

export default Contact;