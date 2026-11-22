import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { TopBar } from "../components/TopBar.jsx";
import { PageWrap } from "../components/PageWrap.jsx";
import { MenuItem } from "../components/MenuItem.jsx";
import { CULTURE_CHAPTERS } from "../data/cultureChapters.js";

export function CultureMenu() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const { hsk: hskLevel, setHsk: onChangeHSK, viewMode: mode, setViewMode: onChangeMode } = useApp();
  const showPinyin = mode === "HPE" || mode === "HP";
  const showEnglish = mode === "HPE" || mode === "HE";

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF7", fontFamily: "'Noto Sans SC', sans-serif" }}>
      <TopBar title="文化文游" subtitle="Cultural Stories" onBack={() => navigate("/main")} hskLevel={hskLevel} onChangeHSK={onChangeHSK} mode={mode} onChangeMode={onChangeMode} />
      <PageWrap maxWidth={580}>
        <div style={{ padding: "40px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>🏮</div>
            <div style={{ fontSize: 15, color: "#888", lineHeight: 1.7 }}>
              走入中国历史经典场景，在互动故事中<br />学习成语典故，体验中华文化。
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CULTURE_CHAPTERS.map(ch => (
              <MenuItem key={ch.id} item={ch} showPinyin={showPinyin} showEnglish={showEnglish} onClick={() => navigate("/culture/" + ch.id)} hovered={hovered} onHover={setHovered} />
            ))}
          </div>
        </div>
      </PageWrap>
    </div>
  );
}
