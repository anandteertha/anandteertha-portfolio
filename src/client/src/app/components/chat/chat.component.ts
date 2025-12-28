import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;
  
  isOpen = false;
  messages: ChatMessage[] = [];
  currentMessage = '';
  isLoading = false;
  error: string | null = null;
  private shouldScroll = false;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // Add welcome message
    this.messages.push({
      role: 'assistant',
      content: "Hi! I'm here to answer questions about Anandteertha Rao's career and education. What would you like to know?",
      timestamp: new Date()
    });
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        this.messageInput?.nativeElement?.focus();
        this.scrollToBottom();
        this.autoResizeTextarea();
      }, 100);
    }
  }

  closeChat() {
    this.isOpen = false;
  }

  async sendMessage() {
    if (!this.currentMessage.trim() || this.isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: this.currentMessage.trim(),
      timestamp: new Date()
    };

    this.messages.push(userMessage);
    this.currentMessage = '';
    // Reset textarea height after clearing
    setTimeout(() => this.autoResizeTextarea(), 0);
    this.isLoading = true;
    this.error = null;
    this.shouldScroll = true;

    try {
      this.chatService.sendMessage(this.messages).subscribe({
        next: (response) => {
          const assistantMessage: ChatMessage = {
            role: 'assistant',
            content: response,
            timestamp: new Date()
          };
          this.messages.push(assistantMessage);
          this.isLoading = false;
          this.shouldScroll = true;
          setTimeout(() => {
            this.messageInput?.nativeElement?.focus();
            this.autoResizeTextarea();
          }, 100);
        },
        error: (error: any) => {
          const errorText = error.message || 'Failed to get response. Please try again.';
          this.error = errorText;
          const errorMessage: ChatMessage = {
            role: 'assistant',
            content: errorText,
            timestamp: new Date()
          };
          this.messages.push(errorMessage);
          this.isLoading = false;
          this.shouldScroll = true;
        }
      });
    } catch (error: any) {
      const errorText = error.message || 'Failed to get response. Please try again.';
      this.error = errorText;
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: errorText,
        timestamp: new Date()
      };
      this.messages.push(errorMessage);
      this.isLoading = false;
      this.shouldScroll = true;
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    } else {
      // Auto-resize textarea
      setTimeout(() => this.autoResizeTextarea(), 0);
    }
  }

  autoResizeTextarea() {
    const textarea = this.messageInput?.nativeElement;
    if (textarea) {
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      // Set height based on content, but limit to max-height
      const maxHeight = 160; // ~4 lines
      const newHeight = Math.min(textarea.scrollHeight, maxHeight);
      textarea.style.height = `${newHeight}px`;
      
      // Show scrollbar only if content exceeds maxHeight
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.overflowY = 'auto';
      } else {
        textarea.style.overflowY = 'hidden';
      }
    }
  }

  scrollToBottom() {
    try {
      if (this.chatContainer) {
        const element = this.chatContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      }
    } catch (err) {
      // Ignore scroll errors
    }
  }

  formatTime(date: Date): string {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  }

  formatMessage(content: string): string {
    // Simple formatting - escape HTML and preserve line breaks
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>');
  }
}

