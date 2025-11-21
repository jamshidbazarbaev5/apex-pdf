'use client';

import { useFormPersistence } from '../../store/persistenceHooks';

interface AutoSaveStatusProps {
  showDetail?: boolean;
  className?: string;
}

/**
 * Component to display auto-save status
 */
export const AutoSaveStatus = ({
  showDetail = true,
  className = '',
}: AutoSaveStatusProps) => {
  const { lastSavedTime, getLastSavedText } = useFormPersistence();

  if (!lastSavedTime) {
    return null;
  }

  return (
    <div
      className={`flex items-center gap-2 text-sm text-gray-600 ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        {showDetail && <span>{getLastSavedText()}</span>}
      </div>
    </div>
  );
};

/**
 * Component to display draft status and clear option
 */
export const DraftStatusBanner = ({
  onClearDraft,
  className = '',
}: {
  onClearDraft?: () => void;
  className?: string;
}) => {
  const { hasDraft, getDraftInfo, lastSavedTime } = useFormPersistence();

  if (!hasDraft) {
    return null;
  }

  const { metadata } = getDraftInfo();
  const sizeKB = (metadata.size / 1024).toFixed(2);

  return (
    <div
      className={`bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-semibold text-blue-900">Draft Auto-Saved</span>
            <span className="text-sm text-blue-700">
              Last saved: {lastSavedTime?.toLocaleString() || 'Unknown'}
              {sizeKB && ` (${sizeKB} KB)`}
            </span>
          </div>
        </div>
        {onClearDraft && (
          <button
            onClick={onClearDraft}
            className="text-sm px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded text-blue-900 transition-colors"
          >
            Clear Draft
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Simple indicator component for save status
 */
export const SaveIndicator = ({
  status,
  className = '',
}: {
  status: 'idle' | 'saving' | 'saved';
  className?: string;
}) => {
  if (status === 'idle') return null;

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      {status === 'saving' && (
        <>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-spin" />
          <span className="text-yellow-700">Saving...</span>
        </>
      )}
      {status === 'saved' && (
        <>
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-green-700">Saved</span>
        </>
      )}
    </div>
  );
};
