import { useHistory } from "react-router-dom";
import Feed from '../components/Feed';
import Friends from '../components/Friends';
import Sidebar from '../components/Sidebar';

interface HomeProps {
    userAuth: boolean
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>
};

const Home: React.FC<HomeProps> = ({ userAuth, setUserAuth }) => {

    let history = useHistory();

    if (!userAuth) {
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