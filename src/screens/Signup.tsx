import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

interface SignupProps {
    userAuth: boolean
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>
};

const Signup: React.FC<SignupProps> = ({ userAuth, setUserAuth }) => {

    let history = useHistory();

    useEffect(() => {
        document.title = 'Odinbook - Signup';
    }, []);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>, firstName: String, lastName: String, email: String, password: String) => {

      e.preventDefault();

      const data = {first_name: firstName, last_name: lastName, email, password}
      const formData = JSON.stringify(data);

      try {
        const req = await fetch(
          "http://localhost:5000/api/signup",
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

        const newUser = {
          email: jsonUserData.user.email,
          firstName: jsonUserData.user.firstName,
          lastName: jsonUserData.user.lastName,
          id: jsonUserData.user.id,
          profileImageUrl: jsonUserData.user.profileImageUrl,
          token: jsonUserData.token.token
        } 

        // Create new user object to string prior to saving to local storage
        const stringNewUserData = await JSON.stringify(newUser);
        
        // Error handling
        if (req.status !== 200) {
          // setSignupErr(true);
          return;
        }
        
        localStorage.setItem("user", stringNewUserData);
        localStorage.setItem("userAuth", true as any);
        history.go(0)
      } catch (err) {
      //   setSignupErr(true);
      }
    }

    return (
        <div className="flex flex-wrap justify-center content-start mt-32">
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <h1 className="text-3xl font-extrabold">ODINBOOK.</h1>
                </div>
            </div>
            <div className="flex justify-center items-center w-96">
                <div className="">
                    <SignupForm handleSignUp={handleSignUp} />
                </div>
            </div>
        </div>
    )
}

export default Signup;