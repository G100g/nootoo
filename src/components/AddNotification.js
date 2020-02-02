import React from "react";
import { useState } from "react";
import { useNotification } from "../hooks/useNotification";

const AddNotification = () => {
    const [message, setMessage] = useState("");
    const [enableButton, setEnableButton] = useState(false);
    const { addNotification } = useNotification();

    return (
        <div className="add-notification">
            <textarea
                className="add-notification__input"
                onChange={e => {
                    const message = e.target.value;
                    setEnableButton(message.trim() !== "");
                    setMessage(message);
                }}
                placeholder="Buy milk..."
                value={message}
            ></textarea>
            <button
                className="add-notification__button"
                type="button"
                onClick={() => {
                    addNotification(message);
                }}
                disabled={!enableButton}
            >
                Add
            </button>
        </div>
    );
};

export default AddNotification;
