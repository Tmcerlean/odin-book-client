const getBearerToken = (jsonUserObject: string) => {
    const userObject = JSON.parse(jsonUserObject);
    const bearerToken = userObject.token;
    return bearerToken; 
};

export default getBearerToken;