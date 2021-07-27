import { useState } from "react";

interface UserObject extends Object {
    email: string
    firstName: string
    lastName: string
    id: string
    profileImageUrl: string
    token: string
}

const useBearerToken = (userObject: UserObject) => { // Get object (parameter) from useLocalStorage hook

    const [bearerToken, setBearerToken] = useState(() => {
        try {
            return userObject.token;
        } catch (error) {
            console.error(`There is currently no bearer token set in localStorage`);
            return '';
        }
    });
    
    return bearerToken;
};

export default useBearerToken;