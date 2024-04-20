import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AI from "../../assets/icon/brain.png";
import "./chatGPT.css";
import {
  faArrowLeft,
  faImage,
  faMicrophone,
  faPaperPlane,
  faPaperclip,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ChatGPT() {
  const [userInput, setUserInput] = useState("");
  const [responseAI, setResponseAI] = useState([]);

  async function handleApiResponse(event) {
    event.preventDefault(); // Empêcher le rafraîchissement de la page
    setUserInput(""); // Lorsqu'on soumet le formulaire l'input revien à un string vide
    setResponseAI([...responseAI, { user: "me", message: `${userInput}` }])

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: 'user', content: userInput }], //responseAI.map((message) => message.message).join("")
          max_tokens: 100,
        })
      })


      const data = await response.json();
      setResponseAI([...responseAI, { user: "me", message: `${userInput}` }, { user: "gpt", message: `${data.choices[0].message.content}` }])

    }
    catch (error) {
      console.error("Erreur lors de la requête à l'API OpenAI :", error);
    }

  };


  return (
    <>

      <div className="box">
        <div className="sidebar">
          <div className="side-header">
            <Link to="/"><div className="retour"><span><FontAwesomeIcon icon={faArrowLeft} /></span></div></Link>
            <button><span><FontAwesomeIcon icon={faPlus} /></span> Nouvelle discussion</button>
          </div>

          <div className="historique">
            <h4>Discussion précedentes</h4>
            <br />
            <p>Comment rencontrer le président Tchisekedi ?</p>
          </div>
          <div className="info">
            <small>Cette application utilise l'API de chatGPT-3.5 un des modèles d'intelligence artificielle de langage naturel le plus impressionnants développés par OpenAI. <br /> Gome, RDCongo ©2024</small>
          </div>
        </div>
        <div className="chat-container">
          <div className="header-container">
            <div className="header-content">
              <div className="head">
                <div className="kiriku">
                  <img src={AI} alt="" />
                </div>
                <h4>YetuGPT</h4>
              </div>
            </div>
          </div>

          <div className="message-container">
            <div className="messages">
              {responseAI.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
            </div>
          </div>

          <div className="input-container">
            <form onSubmit={handleApiResponse}>
              <input type="text" rows="1" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Pose moi n'importe quelle question" />
              <span><FontAwesomeIcon icon={faMicrophone} /></span>
              <label htmlFor='gptFiles'>
                    <span><FontAwesomeIcon icon={faImage} /></span>
                    <input type='file' id='gptFiles' />
              </label>
              <span><FontAwesomeIcon icon={faPaperclip} /></span>
              <button type="submit" className="send"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
            <small>YetuGPT peut afficher des informations inexactes, y compris sur des personnes. Vérifiez donc ses réponses.</small>
          </div>

        </div>
      </div>
    </>
  )
}


const ChatMessage = ({ message }) => {
  return (
    <div className={`${message.user == "gpt" ? "bulle2" : "bulle"}`}>
      <p>{message.message}</p>
    </div>
  )
}

















