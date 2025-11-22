import { useState } from "react";

interface SignatureDisplayProps {
  value?: string;
  label?: string;
  isReadOnly?: boolean;
  className?: string;
}

export function SignatureDisplay({
  value,
  label = "Signature",
  isReadOnly = true,
  className = "",
}: SignatureDisplayProps) {
  const [imageError, setImageError] = useState(false);

  // If value starts with /, it's a public path, otherwise it's a data URL
  const signatureSrc = value && value.trim() ? value : null;

  return (
    <div className={className}>
      {signatureSrc && !imageError ? (
        <div className="relative inline-block">
          <img
            src={signatureSrc}
            alt={label}
            className="h-16 border border-gray-300 rounded bg-white"
            onError={() => {
              setImageError(true);
            }}
          />
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded px-4 py-3 text-gray-400 text-sm">
          {isReadOnly ? "No signature on file" : "Click to add signature"}
        </div>
      )}
    </div>
  );
}
