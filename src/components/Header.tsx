const Header: React.FC = () => {
    return (
        <div className="flex sticky top-0 z-50 p-2 bg-white justify-between items-center shadow-md">
            <div className="flex items-center">
                <div>
                    <h1 className="text-6xl">Odinbook</h1>
                </div>
            </div>
            <div className="flex items-center">
                <img src="https://i.ibb.co/42drhRP/mcerleantom-79390488-2535626826491703-1307724872187531610-n-1.jpg" alt="profile" width="40" height="40" className="border rounded-full cursor-pointer mr-2" />
                <p className="whitespace-nowrap font-semibold pr-3">Tom McErlean</p>
            </div>
        </div>    
    )
}

export default Header;