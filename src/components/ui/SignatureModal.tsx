import React, { useRef, useState, useEffect } from "react";
import { Button } from "./button";
import "./SignatureModal.css";

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
    <div className="signature-modal-container">
      <div className="signature-modal-box">
        {/* Header - No scroll */}
        <div className="signature-modal-header">
          <h2>{title}</h2>
          <button
            onClick={onClose}
            className="signature-modal-close-btn"
          >
            ✕
          </button>
        </div>

        {/* Tabs - No scroll */}
        <div className="signature-modal-tabs">
          <button
            onClick={() => setMode("type")}
            className={`signature-modal-tab ${mode === "type" ? "active" : ""}`}
          >
            Type
          </button>
          <button
            onClick={() => setMode("draw")}
            className={`signature-modal-tab ${mode === "draw" ? "active" : ""}`}
          >
            Draw
          </button>
          <button
            onClick={() => setMode("upload")}
            className={`signature-modal-tab ${mode === "upload" ? "active" : ""}`}
          >
            Upload
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="signature-modal-content">
          {mode === "type" && (
            <div className="signature-modal-section">
              <div>
                <label>Your Full Name</label>
                <input
                  type="text"
                  value={typedSignature}
                  onChange={(e) => setTypedSignature(e.target.value)}
                  placeholder="Your Full Name"
                  autoFocus
                />
              </div>

              <div>
                <label>Signature Style</label>
                <select
                  value={signatureFont}
                  onChange={(e) => setSignatureFont(e.target.value)}
                >
                  <option value="elegant">Elegant</option>
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="formal">Formal</option>
                  <option value="cursive">Cursive</option>
                </select>
              </div>

              <div className="signature-modal-preview">
                <p className="signature-modal-preview-title">Preview:</p>
                <div className="signature-modal-preview-box">
                  {typedSignature ? (
                    <div
                      style={{
                        fontFamily: SIGNATURE_FONTS[signatureFont as keyof typeof SIGNATURE_FONTS],
                        fontSize: "clamp(28px, 5vw, 48px)",
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
                    <div style={{color: "#a0aec0", fontSize: "0.875rem"}}>
                      Enter your name to preview
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {mode === "draw" && (
            <div className="signature-modal-section">
              <p style={{fontSize: "0.875rem", color: "#4b5563", margin: "0 0 0.75rem 0"}}>
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
                className="signature-modal-canvas"
              />
              <div style={{display: "flex", justifyContent: "flex-end"}}>
                <Button
                  onClick={clearCanvas}
                  variant="outline"
                  className="px-4 py-2 text-sm"
                >
                  Clear
                </Button>
              </div>
            </div>
          )}

          {mode === "upload" && (
            <div className="signature-modal-section">
              <p style={{fontSize: "0.875rem", color: "#4b5563", margin: "0 0 0.75rem 0"}}>
                Upload an image of your handwritten signature.
              </p>
              <div className="signature-modal-upload">
                <svg
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
                <p>Click to upload or drag and drop</p>
                <p>PNG, JPG, GIF up to 10MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{display: "none"}}
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 text-sm"
                >
                  Select Image
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Always visible, no scroll */}
        <div className="signature-modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSign} className="primary">Sign</button>
        </div>
      </div>
    </div>
  );
}
