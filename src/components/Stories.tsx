const teststories = [
    {
        name: "Tom McErlean",
        src: "https://ibb.co/kJ1CN2Q",
        profile: "https://ibb.co/kJ1CN2Q"
    },
    {
        name: "Marko Closs",
        src: "https://ibb.co/BTgSrYV",
        profile: "https://ibb.co/BTgSrYV" 
    },
    {
        name: "Bryony Farlow",
        src: "https://ibb.co/99CrzYy",
        profile: "https://ibb.co/99CrzYy"
    }
]

const Stories: React.FC = () => {
    return (
        <div className="flex mx-auto justify-center space-x-3">
            {teststories.map(story => {
                <StoryCard />
            })}
        </div>    
    )
}

export default Stories;