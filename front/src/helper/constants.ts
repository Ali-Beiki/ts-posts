export const PostTypeAction = {
    ADD_POST: "ADD_POST",
    EDIT_POST: "EDIT_POST",
    DELETE_POST: "DELETE_POST",
    SET_POST: "SET_POST",
    SET_POSTS: "SET_POSTS",
    GET_POSTS: "GET_POSTS",

} as const;

export type PostTypeAction =
    (typeof PostTypeAction)[keyof typeof PostTypeAction];
