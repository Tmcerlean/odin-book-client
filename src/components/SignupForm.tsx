import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// interface SignupFormProps {
//     handleSignUp: 
// };

const SignupForm: React.FC = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signupErr, setSignupErr] = useState(false);

    const isEmailValid = email.length > 0;
    const isPasswordValid = (password !== '' && password.length > 5);
    const isSignupValid = isEmailValid && isPasswordValid;

    return (
        <div className="w-full max-w-xs">
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-50">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="First Name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Last Name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />
                </div>
                <div className="flex items-center justify-between">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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