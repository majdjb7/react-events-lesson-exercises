import React, { Component } from 'react';
import Conversation from './Conversation';
import List from './List'

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

  displayConvo = (name) => {
    this.setState({
      displayConversation: name
    })
  }

  resetConvo = () => {
    this.setState({
      displayConversation: null
    })
  }

  render() {
    const {displayConversation, conversations} = this.state
    return (
      <div >
        {displayConversation ? 
        <Conversation
        convo={conversations.find(c => c.with === displayConversation).convo}
        sender={displayConversation}
        resetConvo = {this.resetConvo}/> : 
        <List displayConvo={this.displayConvo} contacts={conversations.map(c => c.with)}/>}
      </div>
    );
  }
}

export default Exercise2;
