import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

interface SignupFormProps {
    handleSignUp: (e: React.FormEvent<HTMLFormElement>, firstName: String, lastName: String, email: String, password: String) => Promise<void>
};

const SignupForm: React.FC<SignupFormProps> = ({handleSignUp}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupErr, setSignupErr] = useState(false);

    const isEmailValid = email.length > 0;
    const isPasswordValid = (password !== '' && password.length > 5);
    const isSignupValid = isEmailValid && isPasswordValid;

    return (
        <div className="w-full max-w-xs">
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-50" onSubmit={(e) => handleSignUp(e, firstName, lastName, email, password)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="first_name" 
                        type="text"
                        placeholder="First Name" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="last_name" 
                        type="text" 
                        placeholder="Last Name" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="email" 
                        type="text" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        name="password" 
                        type="password" 
                        placeholder="******************" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <div className="flex items-center justify-between">
                    <button className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSignupValid ? "cursor-pointer" : "bg-opacity-50 cursor-default"}`} type="submit">
                        Sign Up
                    </button>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <p className="text-sm">Have an account already? <Link to={ROUTES.LOGIN} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"> Log In</Link></p>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2021 ODINBOOK. All rights reserved.
            </p>
        </div>
    )
}

export default SignupForm;