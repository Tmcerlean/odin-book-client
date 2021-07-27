import { useHistory } from "react-router-dom";
import Feed from '../components/Feed';
import Friends from '../components/Friends';
import Sidebar from '../components/Sidebar';

interface HomeProps {

    user: string
    setUser: React.Dispatch<string>
};

const Home: React.FC<HomeProps> = ({ user, setUser }) => {

    let history = useHistory();

    if (!user) {
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