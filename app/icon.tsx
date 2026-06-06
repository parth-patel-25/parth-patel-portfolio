import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 14,
          color: "#ffffff",
          fontSize: 44,
          fontWeight: 700,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif",
          letterSpacing: -2,
          lineHeight: 1,
          paddingBottom: 4,
        }}
      >
        P
      </div>
    ),
    { ...size },
  )
}
