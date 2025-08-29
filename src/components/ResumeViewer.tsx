import React from 'react';
import { X } from 'lucide-react';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Resume</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="/Suhani-Gupta-Resume.pdf"
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;