import { useState } from "react";

export default function Props3() {
    const [color, setColor] = useState("");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            padding: "24px",
            fontFamily: "sans-serif",
        }}>
            <h3 style={{ fontSize: "1.5rem", margin: 0 }}>🎨 Color Generator</h3>

            <input
                type="text"
                placeholder="Enter a color (red, blue, #ff6347...)"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                    padding: "10px 16px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    outline: "none",
                    width: "260px",
                }}
            />

            <div
                style={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: color || "transparent",
                    border: "2px solid #ccc",
                    borderRadius: "12px",
                    boxShadow: color ? `0 4px 20px ${color}88` : "none",
                    transition: "background-color 0.3s, box-shadow 0.3s",
                }}
            />

            {color && (
                <p style={{ fontSize: "0.95rem", color: "#555", margin: 0 }}>
                    Current color: <strong style={{ color }}>{color}</strong>
                </p>
            )}
        </div>
    );
}
