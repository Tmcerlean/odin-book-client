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

    const handleLogIn = async (e: Event, email: String, password: String) => {
        
        e.preventDefault();

        const data = { email, password };
        const formData = JSON.stringify(data);

        try {
            const req = await fetch(
                "http://localhost:5000/api/login",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                }
            );
            const myJson = await req.json();
            if (req.status !== 200) {
                // setLoginErr(true);
                return;
            }
            localStorage.setItem("token", myJson);
            // localStorage.setItem("userAuth", "true");
            // history.go(0)
        } catch (err) {
            console.log(err)
            // setLoginErr(true);
        }
    }

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