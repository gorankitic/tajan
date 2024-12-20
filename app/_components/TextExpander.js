"use client";

// hooks
import { useState } from "react";

const TextExpander = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded ? children : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Прикажи мање" : "Прикажи више"}
      </button>
    </span>
  );
};

export default TextExpander;
