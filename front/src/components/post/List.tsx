import { useContext, type FC } from "react";
import PostItem from "./Item";
import { PostContext } from "../../context/post";

const List: FC = () => {
    const { postState } = useContext(PostContext)!;
    return (
        <div className="flex flex-col gap-3 mt-5">
            {postState.posts.length > 0 ? (
                postState.posts?.map((item) => {
                    return <PostItem {...item} key={item.id}/>;
                })
            ) : (
                <span className="text-center text-lg font-bold">
                    No Data To Display
                </span>
            )}
        </div>
    );
};

export default List;
