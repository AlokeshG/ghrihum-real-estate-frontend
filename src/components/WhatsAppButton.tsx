import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/j7t4i3"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Icon */}
      <MessageCircle size={28} className="text-white relative z-10 fill-white" />
    </a>
  );
}
