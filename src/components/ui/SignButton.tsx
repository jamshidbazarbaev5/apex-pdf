import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { SignatureModal } from "./SignatureModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";

interface SignButtonProps {
  value?: string;
  onChange: (signature: string) => void;
  label?: string;
  placeholder?: string;
}

export function SignButton({
  value,
  onChange,
  label = "Signature",
  placeholder = "Click to add signature",
}: SignButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signatureImage, setSignatureImage] = useState<string | undefined>(
    value
  );
  const dispatch = useAppDispatch();
  const globalSignature = useAppSelector((state) => state.form.globalSignature);

  // Sync with global signature whenever it changes
  useEffect(() => {
    if (globalSignature && globalSignature !== signatureImage) {
      setSignatureImage(globalSignature);
      onChange(globalSignature);
    }
  }, [globalSignature]);

  const handleSign = (signature: string) => {
    setSignatureImage(signature);
    onChange(signature);

    // Always update the global signature to sync across all fields
    dispatch(updateFormData({ globalSignature: signature }));
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSignatureImage(undefined);
    onChange("");
  };

  return (
    <>
      <div className="flex items-center gap-3 py-2">
        <div className="flex-1">
          {signatureImage ? (
            <div className="relative inline-block">
              <img
                src={signatureImage}
                alt="signature"
                className="h-16 border border-gray-300 rounded"
              />
              <button
                onClick={handleClear}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 text-sm"
              >
                ✕
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded px-4 py-3 text-gray-500 text-sm">
              {placeholder}
            </div>
          )}
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="whitespace-nowrap"
        >
          {signatureImage ? "Update" : "Sign"}
        </Button>
      </div>

      <SignatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSign={handleSign}
        title={`Add Your ${label}`}
      />
    </>
  );
}

