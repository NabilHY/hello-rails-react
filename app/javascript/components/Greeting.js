import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetingSlice";
import { selectGreeting } from "../redux/greetingSlice";

function Greeting() {
    const dispatch = useDispatch();
    const greeting = useSelector(selectGreeting);

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
}

export default Greeting;