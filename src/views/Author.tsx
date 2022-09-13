import React, { useState, useEffect } from "react";
import "../style/radio.style.css";

const Author: React.FC = () => {
    const [index, setIndex] = useState(0);

    const liInfo = [
        { id: "A", label: "hello" },
        { id: "B", label: "world" },
        { id: "C", label: "react" },
    ];

    function changeIndex(e: any) {
        console.log(e);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === 2 ? 0 : prev + 1));
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="view">
            <h1>Author</h1>
            <div className="content radioTest">
                {liInfo.map(({ id, label }, idx) => {
                    return (
                        <div key={id}>
                            <input type="radio" id={id} name="test" checked={index === idx} onChange={changeIndex} />
                            <label htmlFor="A">{label}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Author;
