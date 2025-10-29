type Post = {
    id: string;
    title: string;
    content: string;
};

type postAction = {
    type: string;
    payload?: Post;
};
