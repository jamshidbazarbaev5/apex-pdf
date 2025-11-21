    import React, {type ReactNode } from 'react';

    interface DocumentSheetProps {
    children: ReactNode;
    className?: string;
    }

    export const DocumentSheet: React.FC<DocumentSheetProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white shadow-2xl w-full max-w-[850px] min-h-[1100px] mx-auto p-12 relative font-serif overflow-x-auto min-w-[850px] md:overflow-x-visible md:min-w-0 ${className}`} style={{ WebkitOverflowScrolling: 'touch' }}>
        {children}
        </div>
    );
    };