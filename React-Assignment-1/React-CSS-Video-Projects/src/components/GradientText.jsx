import React from 'react';
import './GradientText.css';

export default function GradientText() {
  return (
    <div className="gradient-text-wrapper">
      <div contentEditable="true" suppressContentEditableWarning={true} className="main-text">
        Salman Ahmad
      </div>
    </div>
  );
}
