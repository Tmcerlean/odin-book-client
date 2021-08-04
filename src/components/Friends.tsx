import Contact from './Contact';

const testFriends = [
    {
        src: "https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg",
        name: "Tom McErlean"
    },
    {
        src: "https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg",
        name: "Tom McErlean"
    }
]

const Friends: React.FC = () => {
    return (
        <div className="hidden lg:flex flex-col w-72 p-2 mt-6">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
            </div>   

            {testFriends.map((contact) => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))} 
        </div>
    )
}

export default Friends;