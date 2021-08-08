export interface User {
    email: string
    firstName: string
    id: string
    lastName: string
    profileImageUrl: string
    token: string
}

 export interface AuthorObject {
    email: string
    facebookId: string
    firstName: string
    friendRequests: string[]
    friends: string[]
    hashedPassword: string
    lastName: string
    posts: string[]
    profileImageUrl: string
    __v: number
    _id: string
    __proto__: object
}

export interface CommentObject {
    author: AuthorObject
    comment: string
    likes: string[]
    post: string
    timestamp: string
    __v: number
    _id: string
    __proto__: object
}

export interface PostObject {
    author: AuthorObject
    comments: CommentObject[]
    content: string
    likes: string[]
    timestamp: string
    __v: number
    _id: string
    __proto__: object
}