import React, { useEffect, useState } from "react";
import { Message } from "./Message";

import "./effects.css";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log("uep");
    }, []);

    useEffect(() => {
        // console.log("form state");
    }, [formState]);

    useEffect(() => {
        // console.log("email");
    }, [email]);

    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };

    return (
        <>
            <h1>Effects</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={handleInputChange}
                />
            </div>
           
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu correo"
                    value={ email }
                    autoComplete="off"
                    onChange={handleInputChange}
                />
            </div>

            { (name === '123') && <Message/> }
        </>
    );
};
