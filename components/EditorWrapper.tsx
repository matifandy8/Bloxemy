"use client";

import React, { useRef, useEffect, useState } from "react";

interface EditorWrapperProps {
  height?: string;
  language?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: any;
  theme?: {
    background?: string;
    textColor?: string;
    lineNumberColor?: string;
    borderColor?: string;
    fontSize?: number;
  };
}

const DEFAULT_THEME = {
  background: "#18181b",
  textColor: "#22c55e",
  lineNumberColor: "#52525b",
  borderColor: "#222",
  fontSize: 14,
};

export default function EditorWrapper({
  height = "300px",
  language = "lua",
  value = "",
  onChange,
  theme = DEFAULT_THEME,
}: EditorWrapperProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    setLineCount((value || "").split("\n").length || 1);
  }, [value]);

  const handleTextareaScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  const generateLineNumbers = (count: number): string => {
    return Array.from({ length: count }, (_, i) => i + 1).join("\n");
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    border: `1px solid ${theme.borderColor}`,
    borderRadius: 8,
    background: theme.background,
    boxShadow: "0 2px 8px #0002",
    padding: 0,
    overflow: "hidden",
    fontFamily: "Fira Mono, monospace",
  };

  const lineNumbersStyle: React.CSSProperties = {
    userSelect: "none",
    background: theme.background,
    color: theme.lineNumberColor,
    textAlign: "right",
    padding: "16px 8px 16px 0",
    fontSize: theme.fontSize,
    fontFamily: "Fira Mono, monospace",
    lineHeight: 1.6,
    minWidth: 32,
    height,
    overflow: "hidden",
    borderRight: `1px solid ${theme.borderColor}`,
    boxSizing: "border-box",
  };

  const textareaStyle: React.CSSProperties = {
    width: "100%",
    height,
    background: theme.background,
    color: theme.textColor,
    border: "none",
    outline: "none",
    resize: "vertical",
    fontSize: theme.fontSize,
    fontFamily: "Fira Mono, monospace",
    padding: 16,
    boxSizing: "border-box",
    lineHeight: 1.6,
    borderRadius: 0,
  };

  return (
    <div style={containerStyle}>
      <div
        ref={lineNumbersRef}
        aria-hidden="true"
        style={lineNumbersStyle}
      >
        <pre style={{ margin: 0 }}>{generateLineNumbers(lineCount)}</pre>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onScroll={handleTextareaScroll}
        spellCheck={false}
        style={textareaStyle}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-label="Editor de código"
      />
    </div>
  );
}