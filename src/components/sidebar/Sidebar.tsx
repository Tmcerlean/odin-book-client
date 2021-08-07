import SidebarRow from './SidebarRow';
import {
    CogIcon,
    UsersIcon
} from '@heroicons/react/solid';

const Sidebar: React.FC = () => {
    return (
        <div className="w-72 p-2 mt-6 max-w-5xl xl:min-w-lg">
            <SidebarRow src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg" title="Tom McErlean" />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={CogIcon} title="Account" />
        </div>    
    )
}

export default Sidebar;