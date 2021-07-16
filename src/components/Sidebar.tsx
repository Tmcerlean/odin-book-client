import SidebarRow from './SidebarRow';
import {
    CogIcon,
    UsersIcon
} from '@heroicons/react/solid';

const Sidebar: React.FC = () => {
    return (
        <div className="p-2 mt-5 max-w-5xl xl:min-w-lg">
            <SidebarRow src="" title="Tom McErlean" />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={CogIcon} title="Account" />
        </div>    
    )
}

export default Sidebar;