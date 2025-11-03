
type Post = {
    id: string;
    title: string;
    content: string;
};

type PostState = {
    posts: Post[];
    selectedPost: Post;
};

type postAction = {
    type: PostTypeAction;
    payload?: Post;
};
