import React, {
    type Dispatch,
    type FC,
    type SetStateAction,
    createContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { InitialPostState } from "../../helper/constants";
import { PostReducer } from "../../reducers/post";
import useQuery from "../../hooks/useQuery";

type ProviderProps = {
    children: React.ReactNode;
};

export const PostContext = createContext<{
    postState: PostState;
    dispatch: Dispatch<postAction>;
} | null>(null);

const PostProvider: FC<ProviderProps> = (props) => {
    const [postState, dispatch] = useReducer(PostReducer, InitialPostState);
    const [search, setSearch] = useState("");

    const [queryUrl, setQueryUrl] = useState("post");
    const query = useQuery<Post[]>(queryUrl);

    useEffect(() => {
        if (search.length > 0) return setQueryUrl(`post?search=${search}`);
        setQueryUrl("post"); // if empty search
    }, [search]);

    useEffect(() => {
        query.refetch();
    }, [queryUrl]);

    const value = { postState, dispatch, query, search, setSearch };

    return (
        <div>
            <PostContext.Provider value={value}>
                {props.children}
            </PostContext.Provider>
        </div>
    );
};

export default PostProvider;
