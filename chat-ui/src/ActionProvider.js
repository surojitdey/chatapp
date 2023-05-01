import React, {useState} from 'react';
import httpService from "./helper/httpsService.js";
// import config from "./config/config.js";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [prompt, setPrompt] = useState("");
    const handleResponse = (message) => {

        const request = {
            method: "POST",
            url: "http://127.0.0.1:5000/",
            data: {
                "message": message,
                "prompt": prompt
            }
        };

        httpService.invokeApi(request, (status, res) => {
            if (status) {
                const botMessage = createChatBotMessage(res.answer);
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                }));
            } else {
                console.log("***********");
            }
        });
    
    };

    const options = ['Mona Lisa', 'Barak Obama', 'Leonado Da Vinci', 'Snoopdog'];
    const onOptionChangeHandler = (event) => {
        setPrompt(event.target.value)
    }

    return (
        <div>
            <select onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
            </select>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleResponse
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;