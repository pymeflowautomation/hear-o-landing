import React from 'react';

interface GlowBorderProps {
  subtle?: boolean;
}

const GlowBorder: React.FC<GlowBorderProps> = ({ subtle = false }) => (
  <div className={`glow-border-wrapper${subtle ? ' glow-border-wrapper-subtle' : ''}`} aria-hidden="true">
    <div className="glow-border-line" />
  </div>
);

export default GlowBorder;
