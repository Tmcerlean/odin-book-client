import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';

interface LoginProps {
    userAuth: boolean
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>
};

const Login: React.FC<LoginProps> = ({ userAuth, setUserAuth }) => {

    useEffect(() => {
        document.title = 'Odinbook - Login';
    }, []);

    const handleLogIn = () => {

    };

    const handleFBLogIn = () => {

    };

    return (
        <div className="flex flex-wrap justify-center content-start mt-40">
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <h1 className="text-3xl font-extrabold">ODINBOOK.</h1>
                </div>
            </div>
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;