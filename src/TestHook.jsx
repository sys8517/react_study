import React, {useState, useEffect } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count}번 클릭했어요.`;
    });

    return(
        <div>
            <p>총 {count}번 클릭하셨습니다. </p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}