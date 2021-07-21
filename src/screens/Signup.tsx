import SignupForm from '../components/SignupForm';

interface SignupProps {
    userAuth: boolean
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>
};

const Signup: React.FC<SignupProps> = ({ userAuth, setUserAuth }) => {
    return (
        <div className="h-screen flex flex-wrap justify-center content-start mt-40">
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <h1 className="text-3xl font-extrabold">ODINBOOK.</h1>
                </div>
            </div>
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default Signup;