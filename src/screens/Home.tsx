import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Feed from '../components/Feed';
import Friends from '../components/Friends';
import Sidebar from '../components/sidebar/Sidebar';
import { User } from '../@types/types';

interface HomeProps {
    user: User
    setUser: React.Dispatch<User>
};

const Home: React.FC<HomeProps> = ({ user, setUser }) => {

    let history = useHistory();

    if (!user.email) {
        history.push("/login");
    };

    useEffect(() => {
        document.title = 'Odinbook';
    }, []);

    return (
        <div className="h-screen bg-gray-100 overflow-hidden">          
            <main className="flex">
                <Sidebar />
                <Feed user={user} setUser={setUser} />
                <Friends />
            </main>
        </div>
    )
}

export default Home;