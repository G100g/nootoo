import React from "react";
import { useState } from "react";
import { showNotification } from "../libs/notifications";

const AddNotification = () => {
    const [message, setMessage] = useState("");
    const [enableButton, setEnableButton] = useState(false);
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
                    showNotification(message);
                    setMessage("");
                }}
                disabled={!enableButton}
            >
                Add
            </button>
        </div>
    );
};

export default AddNotification;
