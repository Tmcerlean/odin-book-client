import { CameraIcon } from "@heroicons/react/solid";

const InputBox: React.FC = () => {

    const submitPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Do something");
    }

    return (
        <div className="bg-white mt-6 p-2 rounded-2xl shadow-md text-gray-500 font-medium">
            <div className="flex space-x-4 p-4 items-center">
                <img 
                    className="rounded-full"
                    src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                    alt=""
                    width="40"
                    height="40"
                />
                <form className="flex flex-1" onSubmit={submitPost}>
                    <input 
                        type="text" 
                        placeholder="What's your story?"
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 border-none focus:outline-none"
                    />
                </form>
            </div>
            <div className="flex justify-center p-3 border-t">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Add Photo</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;