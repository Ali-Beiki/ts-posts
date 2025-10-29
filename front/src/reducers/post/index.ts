import { PostTypeAction } from "../../helper/constants";


export const PostReducer = (state:Post,action:postAction) =>{
    switch (action.type) {
        case PostTypeAction.ADD_POST:{
            const {id,title,content}=action.payload 
            return {

            }
        }
    }
}