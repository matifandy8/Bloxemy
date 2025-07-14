"use client";

import React, { useRef, useEffect, useState } from "react";

interface EditorWrapperProps {
  height?: string;
  language?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: any;
}

export default function EditorWrapper({
  height = "300px",
  language = "lua",
  value = "",
  onChange,
}: EditorWrapperProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    setLineCount((value || "").split("\n").length || 1);
  }, [value]);

  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #222",
        borderRadius: 8,
        background: "#18181b",
        boxShadow: "0 2px 8px #0002",
        padding: 0,
        overflow: "hidden",
        fontFamily: "Fira Mono, monospace",
      }}
    >
      <div
        ref={lineNumbersRef}
        aria-hidden="true"
        style={{
          userSelect: "none",
          background: "#18181b",
          color: "#52525b",
          textAlign: "right",
          padding: "16px 8px 16px 0",
          fontSize: 14,
          fontFamily: "Fira Mono, monospace",
          lineHeight: 1.6,
          minWidth: 32,
          height,
          overflow: "hidden",
          borderRight: "1px solid #222",
          boxSizing: "border-box",
        }}
      >
        <pre style={{ margin: 0 }}>{lineNumbers}</pre>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        onScroll={handleScroll}
        spellCheck={false}
        style={{
          width: "100%",
          height,
          background: "#18181b",
          color: "#22c55e",
          border: "none",
          outline: "none",
          resize: "vertical",
          fontSize: 14,
          fontFamily: "Fira Mono, monospace",
          padding: 16,
          boxSizing: "border-box",
          lineHeight: 1.6,
          borderRadius: 0,
        }}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-label="Editor de código"
      />
    </div>
  );
}