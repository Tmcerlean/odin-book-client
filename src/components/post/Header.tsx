import formatDistance from "date-fns/formatDistance";

interface HeaderProps {
    firstName: string
    lastName: string
    timestamp: string
};

const Header: React.FC<HeaderProps> = ({ firstName, lastName, timestamp }) => {

    return (
        <div className="flex space-x-4 p-2 items-center">
                <img 
                    className="rounded-full"
                    src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg"
                    alt=""
                    width="40"
                    height="40"
                />
                <div>
                    <p>{firstName} {lastName}</p>
                    <p className="text-xs">{formatDistance(new Date(timestamp), new Date(), {addSuffix: true,})}</p>
                </div>
        </div>
    )
}

export default Header;