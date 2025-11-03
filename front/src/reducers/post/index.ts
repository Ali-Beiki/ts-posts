import { InitialPostState, PostTypeAction } from "../../helper/constants";

export const PostReducer = (state: PostState, action: postAction) => {
    switch (action.type) {
        case PostTypeAction.ADD_POST: {
            const { id, title, content } = action.payload as Post;
            return {
                selectselectedPost: InitialPostState.selectedPost,
                posts: [
                    ...state.posts,
                    {
                        id,
                        title,
                        content,
                    },
                ],
            };
        }

        case PostTypeAction.EDIT_POST: {
            const { id, title, content } = action.payload as Post;

            return {
                selectedPost: InitialPostState.selectedPost,
                posts: state.posts.map((post) => {
                    if (post.id === id) {
                        return {
                            id,
                            title,
                            content,
                        };
                    }
                    return post;
                }),
            };
        }

        case PostTypeAction.DELETE_POST: {
            const id = action.payload;

            return {
                ...state,
                selectedPost: InitialPostState.selectedPost,
                posts: [
                    ...state.posts.filter((post) => post.id !== id?.toString()),
                ],
            };
        }

        //select
        case PostTypeAction.SET_POST: {
            return { ...state, selectedPost: action.payload };
        }

        case PostTypeAction.SET_POSTS: {
            return {
                selectedPost: InitialPostState.selectedPost,
                posts: action.payload,
            };
        }

        case PostTypeAction.GET_POSTS: {
            return { ...state };
        }

        default: {
            const otherAction = action.type;
            return otherAction;
        }
    }
};
