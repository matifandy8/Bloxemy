"use client";

import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => <div>Cargando editor...</div>,
})

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
    <MonacoEditor
      height={height}
      language={language}
      theme={theme}
      value={value}
      onChange={onChange}
      options={{ ...defaultOptions, ...options }}
    />
  );
} 