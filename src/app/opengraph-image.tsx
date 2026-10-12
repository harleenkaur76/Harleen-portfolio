import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role.toLowerCase()}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#f6f1e7",
        color: "#2a211c",
      }}
    >
      <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#5e5149" }}>
        {`${site.role} / Field notes`}
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 80, lineHeight: 1.08 }}>
        <span>I write code that has to survive</span>
        <span style={{ display: "flex" }}>
          <span>inside</span>
          <span style={{ color: "#7a1f2b", margin: "0 22px" }}>someone else’s</span>
          <span>website.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #2a211c",
          paddingTop: 24,
          fontSize: 34,
        }}
      >
        <span>{site.name}</span>
        <span style={{ color: "#7a1f2b" }}>{new URL(site.url).host}</span>
      </div>
    </div>,
    size,
  );
}
