import React, {Fragment, useEffect, useState} from 'react';
import './App.css';

let messagesInOrder = [];

function Chat () {
    let [messagesToDisplay, setMessagesToDisplay] = useState("");

    let [image1Value, setImage1Value] = useState("avatar1");
    let [image2Value, setImage2Value] = useState("avatar2");

    let [person1ImageSrc, setPerson1ImageSrc] = useState(require(`./images/${image1Value}.png`));
    let [person2ImageSrc, setPerson2ImageSrc] = useState(require(`./images/${image2Value}.png`));

    function handleImage1ValueChange(e) {
        setImage1Value(e.target.value);
    }

    function handleImage2ValueChange(e) {
        setImage2Value(e.target.value);
    }

    useEffect(() => {
        setPerson1ImageSrc(require(`./images/${image1Value}.png`));
        setPerson2ImageSrc(require(`./images/${image2Value}.png`));
    }, [image1Value, image2Value]);

    function sendMessage (e) {
        let person = e.target.value;

        let person1Message = document.getElementById("person1").value;
        let person2Message = document.getElementById("person2").value;

        if (person === "person1") {
            messagesInOrder.push(
                <Fragment>
                    <img src={person1ImageSrc}/>
                    <span className="person1Message">{person1Message}</span>
                <br/>
            </Fragment>
            );
            setMessagesToDisplay(messagesInOrder.map(message=>message));
            document.getElementById("person1").value="";
        } else {
            messagesInOrder.push(
                <Fragment>
                    <span className="person2Message">{person2Message}</span>
                    <img src={person2ImageSrc}/>
                <br/>
                </Fragment>
            );
            setMessagesToDisplay(messagesInOrder.map(message=>message));
            document.getElementById("person2").value="";
        }
    }
    return (
        <Fragment>
            <label className="leftPersonInput">
                <select value={image1Value} onChange={handleImage1ValueChange}>
                    <option value="avatar1">Male 1</option>
                    <option value="avatar2">Male 2</option>
                    <option value="avatar3">Female 1</option>
                    <option value="avatar4">Female 2</option>
                </select>
                <input id="person1" type="text" />
                <button onClick={sendMessage} value="person1">send</button>
            </label>
            <div className="outputBox">
                <div>{messagesToDisplay}</div>
            </div>
            <label className="rightPersonInput">
                <select value={image2Value} onChange={handleImage2ValueChange}>
                    <option value="avatar1">Male 1</option>
                    <option value="avatar2">Male 2</option>
                    <option value="avatar3">Female 1</option>
                    <option value="avatar4">Female 2</option>
                </select>
                <input id="person2" type="text" />
                <button onClick={sendMessage} value="person2">send</button>
            </label>
        </Fragment>
    )
}

function App() {
  return (
    <div className="App">
        <Chat />
    </div>
  );
}

export default App;
