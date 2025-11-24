import React from "react";
import { useFieldNavigation } from "@/hooks/useFieldNavigation";

interface FieldNavigatorProps {
  className?: string;
  showFieldInfo?: boolean;
  compact?: boolean;
}

/**
 * Field Navigator component that provides up/down navigation between unfilled required fields
 */
export const FieldNavigator: React.FC<FieldNavigatorProps> = ({
  className = "",
  showFieldInfo = true,
  compact = false,
}) => {
  const {
    currentField,
    totalUnfilledCount,
    goToFirstUnfilledField,
    goToNextUnfilledField,
    goToPreviousUnfilledField,
  } = useFieldNavigation();

  if (totalUnfilledCount === 0) {
    if (compact) {
      return (
        <div
          className={`bg-green-50 border border-green-200 rounded-lg p-2 ${className}`}
        >
          <div className="flex items-center justify-center gap-1 text-green-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">All fields complete!</span>
          </div>
        </div>
      );
    }
    return (
      <div
        className={`bg-green-50 border border-green-200 rounded-lg p-4 ${className}`}
      >
        <div className="flex items-center justify-center gap-2 text-green-800">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">All required fields completed!</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-yellow-50 border border-yellow-200 rounded-lg ${compact ? "p-2" : "p-4"} ${className}`}
    >
      <div className={`flex flex-col ${compact ? "space-y-2" : "space-y-4"}`}>
        {/* Header */}
        {/* Current field info */}
        {showFieldInfo && currentField && (
          <div className="bg-white border border-yellow-200 rounded-md p-3">
            <div className="text-sm">
              <div className="font-medium text-gray-900">Current Field:</div>
              <div className="text-gray-700">{currentField.displayName}</div>
              <div className="text-xs text-gray-500 mt-1">
                Page {currentField.pageNumber}
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className={`flex ${compact ? "gap-2" : "gap-3"} justify-center`}>
          <button
            onClick={goToFirstUnfilledField}
            className={`flex items-center gap-1 ${compact ? "px-2 py-1 text-xs" : "px-4 py-2"} bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
            disabled={totalUnfilledCount === 0}
            title="Go to first required field (Ctrl+K or Ctrl+Home)"
          >
            <svg
              className={`${compact ? "w-3 h-3" : "w-4 h-4"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            {compact ? "First" : "Go to First"}
          </button>

          <button
            onClick={goToPreviousUnfilledField}
            className={`flex items-center gap-1 ${compact ? "px-2 py-1 text-xs" : "px-4 py-2"} bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors`}
            disabled={totalUnfilledCount === 0}
            title="Go to previous required field (Ctrl+↑)"
          >
            <svg
              className={`${compact ? "w-3 h-3" : "w-4 h-4"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
            Up
          </button>

          <button
            onClick={goToNextUnfilledField}
            className={`flex items-center gap-1 ${compact ? "px-2 py-1 text-xs" : "px-4 py-2"} bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors`}
            disabled={totalUnfilledCount === 0}
            title="Go to next required field (Ctrl+↓ or Ctrl+J)"
          >
            <svg
              className={`${compact ? "w-3 h-3" : "w-4 h-4"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Down
          </button>
        </div>

        {/* Keyboard shortcuts hint */}
        {!compact && (
          <div className="text-xs text-gray-600 text-center">
            <div className="flex items-center justify-center gap-2">
              <span>Shortcuts:</span>
              <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">
                Ctrl+K
              </kbd>
              <span>First</span>
              <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">
                Ctrl+↑↓
              </kbd>
              <span>Navigate</span>
            </div>
          </div>
        )}

        {/* Field list (optional, collapsed by default) */}
        {/* {!compact && (
          <details className="text-sm">
            <summary className="cursor-pointer text-yellow-700 hover:text-yellow-800 font-medium">
              View all missing fields ({totalUnfilledCount})
            </summary>
            <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
              {unfilledFields.map((field, index) => (
                <div
                  key={`${field.fieldName}-${field.driverIndex || 0}`}
                  className={`text-xs p-2 rounded ${
                    index === currentFieldIndex
                      ? "bg-yellow-200 text-yellow-900 font-medium"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  } cursor-pointer`}
                  onClick={() => {
                    // You could implement direct field navigation here
                  }}
                >
                  <div className="font-medium">{field.displayName}</div>
                  <div className="text-gray-500">Page {field.pageNumber}</div>
                </div>
              ))}
            </div>
          </details>
        )} */}
      </div>
    </div>
  );
};

export default FieldNavigator;
