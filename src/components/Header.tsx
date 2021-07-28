import { useEffect } from 'react';
import { User } from '../@types/types';

interface HeaderProps {
    user: User
    setUser: React.Dispatch<User>
};

const Header: React.FC<HeaderProps> = ({ user, setUser }) => {

    useEffect(() => {
        console.log(user)
    }, [user]);

    return (
        <div className="flex sticky top-0 z-50 p-2 bg-white justify-between items-center shadow-md">
            <div className="flex items-center">
                <div>
                    <img src="https://i.ibb.co/QNwKXv4/oie-p9-SMIiwr8a5-H.png" alt="" width="50" />
                </div>
            </div>
            <div className="flex items-center">
                <img src={`${user.profileImageUrl}`} alt="profile" width="40" height="40" className="border rounded-full cursor-pointer mr-2" />
                <p className="whitespace-nowrap font-semibold pr-3">{`${user.firstName} ${user.lastName}`}</p>
            </div>
        </div>    
    )
}

export default Header;