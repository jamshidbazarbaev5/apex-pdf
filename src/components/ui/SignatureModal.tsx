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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setMode("type")}
            className={`pb-2 px-4 font-semibold transition ${
              mode === "type"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Type Your Signature
          </button>
          <button
            onClick={() => setMode("draw")}
            className={`pb-2 px-4 font-semibold transition ${
              mode === "draw"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Draw Your Signature
          </button>
          <button
            onClick={() => setMode("upload")}
            className={`pb-2 px-4 font-semibold transition ${
              mode === "upload"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Upload Your Signature
          </button>
        </div>

        {/* Content */}
        <div className="min-h-64">
          {mode === "type" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={typedSignature}
                  onChange={(e) => setTypedSignature(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Signature Style
                </label>
                <select
                  value={signatureFont}
                  onChange={(e) => setSignatureFont(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="elegant">Elegant (Great Vibes)</option>
                  <option value="modern">Modern (Dancing Script)</option>
                  <option value="classic">Classic (Pacifico)</option>
                  <option value="formal">Formal (Tangerine)</option>
                  <option value="cursive">Cursive</option>
                </select>
              </div>

              <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <p className="text-sm text-gray-600 mb-4">Preview:</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    backgroundColor: "#ffffff",
                    minHeight: "140px",
                    padding: "20px",
                  }}
                >
                  {typedSignature ? (
                    <div
                      style={{
                        fontFamily: SIGNATURE_FONTS[signatureFont as keyof typeof SIGNATURE_FONTS],
                        fontSize: "60px",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#1a202c",
                        textAlign: "center",
                        letterSpacing: "0.05em",
                        textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                        lineHeight: 1.2,
                      }}
                    >
                      {typedSignature}
                    </div>
                  ) : (
                    <div
                      style={{
                        color: "#a0aec0",
                        fontSize: "14px",
                      }}
                    >
                      Enter your name to preview signature
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {mode === "draw" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Draw your signature using your mouse or trackpad.
              </p>
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="w-full h-64 border-2 border-gray-300 rounded-lg cursor-crosshair bg-white"
              />
              <div className="flex justify-end">
                <Button
                  onClick={clearCanvas}
                  variant="outline"
                  className="px-6"
                >
                  Clear
                </Button>
              </div>
            </div>
          )}

          {mode === "upload" && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Upload an image of your handwritten signature.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
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
                <p className="text-gray-600 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mb-4">
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
                  className="px-6"
                >
                  Select Image
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
          <Button onClick={onClose} variant="outline" className="px-6">
            Cancel
          </Button>
          <Button onClick={handleSign} className="px-8">
            Sign
          </Button>
        </div>
      </div>
    </div>
  );
}
