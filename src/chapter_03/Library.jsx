import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="처음 만난 Deps" numOfPage={365} />
            <Book name="처음 만난 JS" numOfPage={200} />
            <Book name="처음 만난 React" numOfPage={500} />
        </div>
    );
}
export default Library;