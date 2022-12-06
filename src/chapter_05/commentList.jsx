import React from "react";
import Comment from "./comment";


const comments =[
    {
        name : "손예섬",
        comment : "첫 번째 댓글~",
    },
    {
        name : "가나다",
        comment : "댓글123",
    },
    {
        name : "유저4",
        comment : "댓글댓글",
    },
];

export default function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                    
                );
            })}
        </div>
    );
}