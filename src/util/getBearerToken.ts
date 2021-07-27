interface UserObject extends Object {
    email: string
    firstName: string
    lastName: string
    id: string
    profileImageUrl: string
    token: string
}

const getBearerToken = (userObject: UserObject) => {

    const bearerToken = userObject.token;
    
    return bearerToken; 
};

export default getBearerToken;