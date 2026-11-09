"use client"

export default function PrintButton({ label }) {
  return (
    <button onClick={() => window.print()} className="underline hover:opacity-30 cursor-pointer">
      {label}
    </button>
  )
}
