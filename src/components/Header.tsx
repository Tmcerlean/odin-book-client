import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroicons/react/solid';
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline';

const Header: React.FC = () => {
    return (
        <div className="flex sticky top-8 z-50 p-2 bg-white justify-between items-center shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <div>
                    <h1 className="text-6xl">Logo.</h1>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center">
                <img src="" alt="profile" width="40" height="40" className="border rounded-full cursor-pointer mr-2" />
                <p className="whitespace-nowrap font-semibold pr-3">Tom McErlean</p>
            </div>
        </div>    
    )
}

export default Header;