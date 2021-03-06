import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import { User } from '../@types/types';

interface LoginProps {
    user: User
    setUser: React.Dispatch<User>
};

const Login: React.FC<LoginProps> = ({ user, setUser }) => {

    useEffect(() => {
        document.title = 'Odinbook - Login';
    }, []);

    let history = useHistory();

    if (user.email) {
        history.push("/");
    };

    const handleLogIn = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        
        e.preventDefault();

        const data = { email, password };
        const formData = JSON.stringify(data);

        try {
            const req = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                }
            );

            const jsonUserData = await req.json();

            // Error handling
            if (req.status !== 200) {
                // setLoginErr(true);
                return;
            }

            const loggedInUser = {
                email: jsonUserData.user.email,
                firstName: jsonUserData.user.firstName,
                lastName: jsonUserData.user.lastName,
                id: jsonUserData.user.id,
                profileImageUrl: jsonUserData.user.profileImageUrl,
                token: jsonUserData.token.token
            };

            // Create new user object to string
            const stringLoggedInUserData = await JSON.stringify(loggedInUser);
            
            // Save new string to local storage
            localStorage.setItem("user", stringLoggedInUserData);

            // Add user object to state and redirect
            setUser(loggedInUser);
            history.push("/");
        } catch (err) {
            console.log(err)
            // setLoginErr(true);
        }
    }

    const handleFacebookLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
        // TODO
        e.preventDefault();
    }

    return (
        <div className="flex flex-wrap justify-center content-start mt-40">
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <h1 className="text-3xl font-extrabold">ODINBOOK.</h1>
                </div>
            </div>
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <LoginForm handleLogIn={handleLogIn} />
                </div>
            </div>
        </div>
    )
}

export default Login;