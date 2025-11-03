import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService, BotResponse } from '../../chatbot.service';

// Interface pour un message dans le chat
interface Message {
  sender: 'user' | 'bot';
  text: string;
  navigationTarget?: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  isOpen = false;
  messages: Message[] = [];
  userInput = '';
  showTypingIndicator = false;

  private promptMessages = [
    'Hier kannst du mit mir sprechen',
    'Chat with me',
    'Parlez-moi',
    'Hier kannst du texten',
    'Schreiben Sie mir',
  ];
  currentPromptMessage = '';
  private promptInterval: any;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    // Premier message du bot pour accueillir l'utilisateur
    this.messages.push({
      sender: 'bot',
      text: 'Hallo! Ich bin der virtuelle Avatar von Danielou. Stellen Sie mir gerne Ihre Fragen.'
    });

    // Initialize and start cycling through prompt messages
    let i = 0;
    this.currentPromptMessage = this.promptMessages[i];
    this.promptInterval = setInterval(() => {
      i = (i + 1) % this.promptMessages.length;
      this.currentPromptMessage = this.promptMessages[i];
    }, 3000); // Change message every 3 seconds
  }

  ngOnDestroy(): void {
    if (this.promptInterval) {
      clearInterval(this.promptInterval);
    }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    if (this.userInput.trim() === '') {
      return;
    }

    const userMessage = this.userInput; // Store user input before clearing
    this.messages.push({ sender: 'user', text: userMessage });
    this.userInput = ''; // Clear input immediately
    this.showTypingIndicator = true; // Show typing indicator

    // Récupère la réponse complexe du bot via l'API
    this.chatbotService.getAnswer(userMessage).subscribe(
      (botResponse: BotResponse) => {
        this.messages.push({
          sender: 'bot',
          text: botResponse.text,
          navigationTarget: botResponse.navigationTarget
        });
        this.showTypingIndicator = false; // Hide typing indicator on success
      },
      (error) => {
        console.error('Error getting bot response:', error);
        this.messages.push({
          sender: 'bot',
          text: 'Désolé, une erreur est survenue lors de la communication avec l\'IA.'
        });
        this.showTypingIndicator = false; // Hide typing indicator on error
      }
    );
  }

  // Nouvelle méthode pour gérer le clic sur un message
  handleNavigationClick(target: string | undefined): void {
    if (target) {
      this.chatbotService.triggerNavigation(target);
      // Optionnel : fermer le chat après le clic
      this.isOpen = false;
    }
  }
}
