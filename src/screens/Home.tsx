import { useHistory } from "react-router-dom";
import Feed from '../components/Feed';
import Friends from '../components/Friends';
import Sidebar from '../components/Sidebar';
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

    return (
        <div className="h-screen bg-gray-100 overflow-hidden">          
            <main className="flex">
                <Sidebar />
                <Feed />
                <Friends />
            </main>
        </div>
    )
}

export default Home;