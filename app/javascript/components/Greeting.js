import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "../redux/greetingSlice";
import { selectGreeting } from "../redux/greetingSlice";

function Greeting() {
    const greeting = useSelector(selectGreeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreetings());
    }, [dispatch]);

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
}

export default Greeting;