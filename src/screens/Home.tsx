import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className="h-screen bg-gray-100 overflow-hidden">
            <Header>

            </Header>
            
            <main className="flex">
                <Sidebar />
                <Feed />
                {/* Widgets */}
            </main>
        </div>
    )
}

export default Home;