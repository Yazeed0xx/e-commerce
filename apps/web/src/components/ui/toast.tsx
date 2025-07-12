import React from "react";
import { CheckCircle, ShoppingCart, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  if (!isVisible) return null;

  const config = {
    success: {
      icon: <CheckCircle className="h-5 w-5" />,
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-600",
      textColor: "text-white",
      borderColor: "border-green-400",
    },
    error: {
      icon: <AlertTriangle className="h-5 w-5" />,
      bgColor: "bg-gradient-to-r from-red-500 to-rose-600",
      textColor: "text-white",
      borderColor: "border-red-400",
    },
    info: {
      icon: <ShoppingCart className="h-5 w-5" />,
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
      textColor: "text-white",
      borderColor: "border-blue-400",
    },
  };

  const currentConfig = config[type];

  return (
    <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-4 duration-300">
      <div
        className={`
        ${currentConfig.bgColor} 
        ${currentConfig.textColor}
        ${currentConfig.borderColor}
        border-l-4 
        shadow-lg 
        rounded-lg 
        p-4 
        min-w-[300px] 
        max-w-md
        backdrop-blur-sm
        transition-all
        duration-300
        hover:shadow-xl
      `}
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">{currentConfig.icon}</div>
          <div className="flex-1">
            <p className="font-medium text-sm leading-relaxed">{message}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-6 w-6 p-0 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
