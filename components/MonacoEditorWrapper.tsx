"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

interface MonacoEditorWrapperProps {
  height?: string;
  language?: string;
  theme?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  options?: any;
}

export default function MonacoEditorWrapper({
  height = "300px",
  language = "lua",
  theme = "vs-dark",
  value = "",
  onChange,
  options = {},
}: MonacoEditorWrapperProps) {
  const [nonce, setNonce] = useState<string>("");

  useEffect(() => {
    // Generate a nonce for this instance
    const generatedNonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setNonce(generatedNonce);
  }, []);

  const defaultOptions = {
    fontSize: 14,
    minimap: { enabled: false },
    wordWrap: "on",
    fontFamily: "Fira Mono, monospace",
    readOnly: false,
    automaticLayout: true,
    domReadOnly: false,
    accessibilitySupport: "off",
    fixedOverflowWidgets: true,
  };

  return (
    <div style={{ position: "relative" }}>
      <Editor
        height={height}
        language={language}
        theme={theme}
        value={value}
        onChange={onChange}
        options={{ ...defaultOptions, ...options }}
        beforeMount={(monaco) => {
          // Add nonce to Monaco's global configuration
          if (typeof window !== "undefined") {
            (window as any).monacoNonce = nonce;
          }
        }}
      />
    </div>
  );
} 