import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// interface LoginFormProps {
//     handleLogIn: 
//     handleSignUp: 
//     handleFBLogin: 
// };

const LoginForm: React.FC = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = email.length > 0;
    const isPasswordValid = (password !== '' && password.length > 5);
    const isSignupValid = isEmailValid && isPasswordValid;

    return (
        <div className="w-full max-w-xs">
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-50">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Log In
                    </button>
                </div>
                <div className="flex items-center mt-4">
                    <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Log In With Facebook
                    </button>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <p className="text-sm">Don't have an account? <Link to={ROUTES.SIGNUP} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"> Sign up</Link></p>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2021 ODINBOOK. All rights reserved.
            </p>
        </div>
    )
}

export default LoginForm;