"use client"

import { useEffect } from "react"

export default function MonacoLoaderScript() {
  useEffect(() => {
    const meta = document.querySelector('meta[name="csp-nonce"]') as HTMLMetaElement
    const nonce = meta?.content

    if (!nonce) return

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/loader.js"
    script.nonce = nonce
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
} 