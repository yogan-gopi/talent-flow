import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  MessageSquare,
  X,
  Send,
  Minimize2,
  HelpCircle,
  Bot,
  User,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  category?: string;
}

const suggestedQuestions = [
  {
    question: "How do I post a new job?",
    category: "Recruitment",
  },
  {
    question: "What's the onboarding process?",
    category: "Onboarding",
  },
  {
    question: "How to schedule interviews?",
    category: "Interviews",
  },
  {
    question: "Where can I find company policies?",
    category: "Policies",
  },
];

const faqs = [
  {
    question: "How do I post a new job?",
    answer: "Navigate to the Recruitment module and click 'Create Job Posting'. Fill in the job details, requirements, and click 'Publish Job' to make it live.",
    category: "Recruitment",
  },
  {
    question: "What's the onboarding process?",
    answer: "Our onboarding process includes document verification, role-specific training, mentor assignment, and progress tracking through personalized checklists.",
    category: "Onboarding",
  },
  {
    question: "How to schedule interviews?",
    answer: "Go to the Recruitment module, select a candidate, and click 'Schedule Interview'. You can choose from available time slots and send calendar invites automatically.",
    category: "Interviews",
  },
  {
    question: "Where can I find company policies?",
    answer: "Company policies are available in the Directory section under 'Resources' or you can ask me about specific policies and I'll help you find the information.",
    category: "Policies",
  },
];

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "Hi! I'm your AI recruitment assistant. I can help you with job postings, onboarding procedures, company policies, and more. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simple FAQ matching
    const faqMatch = faqs.find((faq) =>
      faq.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      inputValue.toLowerCase().includes(faq.question.toLowerCase().split(" ")[0])
    );

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: faqMatch
          ? faqMatch.answer
          : "I understand you're asking about '" + inputValue + "'. While I'm still learning, I can help you with job postings, onboarding processes, interview scheduling, and company policies. Could you rephrase your question or ask about one of these topics?",
        timestamp: new Date(),
        category: faqMatch?.category,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInputValue("");
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full bg-brand-600 hover:bg-brand-700 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-xl transition-all duration-300 ${
        isMinimized ? "h-16" : "h-96"
      }`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand-600 flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <CardTitle className="text-sm">AI Assistant</CardTitle>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 h-80 flex flex-col">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.type === "assistant" && (
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-brand-100 text-brand-700">
                          <Bot className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                        message.type === "user"
                          ? "bg-brand-600 text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {message.content}
                      {message.category && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          {message.category}
                        </Badge>
                      )}
                    </div>
                    {message.type === "user" && (
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-trust-100 text-trust-700">
                          <User className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}

                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-medium">
                      Try asking about:
                    </p>
                    <div className="space-y-1">
                      {suggestedQuestions.map((item, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full justify-start text-xs h-8"
                          onClick={() => handleSuggestedQuestion(item.question)}
                        >
                          <HelpCircle className="mr-2 h-3 w-3" />
                          {item.question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="text-sm"
                />
                <Button size="sm" onClick={handleSendMessage} className="bg-brand-600 hover:bg-brand-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
