import React, { useRef, useState, useEffect } from "react";
import { Button } from "./button";

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSign: (signature: string) => void;
  title?: string;
}

// Signature font families for elegant preview
const SIGNATURE_FONTS = {
  cursive: "'Brush Script MT', 'Lucida Handwriting', cursive",
  elegant: "'Great Vibes', cursive",
  modern: "'Dancing Script', cursive",
  classic: "'Pacifico', cursive",
  formal: "'Tangerine', cursive",
};

export function SignatureModal({
  isOpen,
  onClose,
  onSign,
  title = "Add Your Signature",
}: SignatureModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<"draw" | "upload" | "type">("type");
  const [typedSignature, setTypedSignature] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureFont, setSignatureFont] = useState("elegant");

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&family=Dancing+Script:wght@400;700&family=Pacifico&family=Tangerine:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Initialize canvas when modal opens
  useEffect(() => {
    if (isOpen && canvasRef.current && mode === "draw") {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
      }
    }
  }, [isOpen, mode]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (mode !== "draw") return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || mode !== "draw") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleSign = () => {
    if (mode === "draw") {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const signatureData = canvas.toDataURL("image/png");
      onSign(signatureData);
      onClose();
    } else if (mode === "upload") {
      // Upload mode - signature is already captured via file input
      onClose();
    } else if (mode === "type") {
      if (typedSignature.trim()) {
        // Create an image with typed signature
        const canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 150;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Use the elegant signature font from Google Fonts
          const fontFamily = SIGNATURE_FONTS[signatureFont as keyof typeof SIGNATURE_FONTS];
          ctx.font = `italic 72px ${fontFamily}`;
          ctx.fillStyle = "#1a202c";
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";
          ctx.fillText(typedSignature, canvas.width / 2, canvas.height / 2);
        }
        const signatureData = canvas.toDataURL("image/png");
        onSign(signatureData);
        onClose();
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const signatureData = event.target?.result as string;
        onSign(signatureData);
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-hidden">
      <div className="bg-white w-full max-w-2xl max-h-[95vh] rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header - No scroll */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 shrink-0 bg-white">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl transition"
          >
            ✕
          </button>
        </div>

        {/* Tabs - No scroll */}
        <div className="flex gap-2 md:gap-4 border-b border-gray-200 px-6 py-0 overflow-x-auto shrink-0 bg-white">
          <button
            onClick={() => setMode("type")}
            className={`py-4 px-3 md:px-4 text-sm font-medium transition whitespace-nowrap border-b-2 ${
              mode === "type"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Type
          </button>
          <button
            onClick={() => setMode("draw")}
            className={`py-4 px-3 md:px-4 text-sm font-medium transition whitespace-nowrap border-b-2 ${
              mode === "draw"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Draw
          </button>
          <button
            onClick={() => setMode("upload")}
            className={`py-4 px-3 md:px-4 text-sm font-medium transition whitespace-nowrap border-b-2 ${
              mode === "upload"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Upload
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {mode === "type" && (
            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-semibold mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={typedSignature}
                  onChange={(e) => setTypedSignature(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold mb-2">
                  Signature Style
                </label>
                <select
                  value={signatureFont}
                  onChange={(e) => setSignatureFont(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="elegant">Elegant</option>
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="formal">Formal</option>
                  <option value="cursive">Cursive</option>
                </select>
              </div>

              <div className="p-3 md:p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Preview:</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    backgroundColor: "#ffffff",
                    minHeight: "100px",
                    padding: "16px",
                  }}
                >
                  {typedSignature ? (
                    <div
                      style={{
                        fontFamily: SIGNATURE_FONTS[signatureFont as keyof typeof SIGNATURE_FONTS],
                        fontSize: "clamp(36px, 8vw, 60px)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#1a202c",
                        textAlign: "center",
                        letterSpacing: "0.05em",
                        textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                        lineHeight: 1.2,
                        wordBreak: "break-word",
                      }}
                    >
                      {typedSignature}
                    </div>
                  ) : (
                    <div
                      style={{
                        color: "#a0aec0",
                        fontSize: "12px",
                      }}
                    >
                      Enter your name to preview
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {mode === "draw" && (
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm text-gray-600">
                Draw your signature using your mouse, trackpad, or touch.
              </p>
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={(e: React.TouchEvent<HTMLCanvasElement>) => {
                  const canvas = canvasRef.current;
                  if (!canvas) return;
                  const rect = canvas.getBoundingClientRect();
                  const touch = e.touches[0];
                  setIsDrawing(true);
                  const ctx = canvas.getContext("2d");
                  if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
                  }
                }}
                onTouchMove={(e: React.TouchEvent<HTMLCanvasElement>) => {
                  if (!isDrawing) return;
                  const canvas = canvasRef.current;
                  if (!canvas) return;
                  const rect = canvas.getBoundingClientRect();
                  const touch = e.touches[0];
                  const ctx = canvas.getContext("2d");
                  if (ctx) {
                    ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
                    ctx.stroke();
                  }
                }}
                onTouchEnd={() => setIsDrawing(false)}
                className="w-full h-48 md:h-64 border-2 border-gray-300 rounded-lg cursor-crosshair bg-white touch-none"
              />
              <div className="flex justify-end">
                <Button
                  onClick={clearCanvas}
                  variant="outline"
                  className="px-4 md:px-6 text-sm md:text-base"
                >
                  Clear
                </Button>
              </div>
            </div>
          )}

          {mode === "upload" && (
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm text-gray-600">
                Upload an image of your handwritten signature.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center bg-gray-50">
                <svg
                  className="mx-auto h-8 md:h-12 w-8 md:w-12 text-gray-400 mb-3 md:mb-4"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20a4 4 0 004 4h24a4 4 0 004-4V20m-8-12l6 6m0 0l-6 6m6-6H12"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mb-3 md:mb-4">
                  PNG, JPG, GIF up to 10MB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 md:px-6 text-sm md:text-base"
                >
                  Select Image
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Always visible, no scroll */}
        <div className="flex justify-end gap-3 px-6 py-5 border-t border-gray-200 bg-white shrink-0">
          <Button 
            onClick={onClose} 
            variant="outline" 
            className="px-6 text-sm"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSign} 
            className="px-8 text-sm bg-blue-600 hover:bg-blue-700 text-white"
          >
            Sign
          </Button>
        </div>
      </div>
    </div>
  );
}
