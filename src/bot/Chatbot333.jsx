import React, { Component,useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import '../bot/Chatbot.css'; // Import the Chatbot CSS

class Chatbot extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: 'welcome',
            message: 'Hello! How can I assist you?',
            trigger: 'userInput',
          },
          {
            id: 'userInput',
            user: true,
            trigger: 'response',
          },
          {
            id: 'response',
            message: 'Thank you for your input!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default Chatbot;
