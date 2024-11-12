// RetroUI.tsx
import { Component } from "solid-js";

const RetroUI: Component = () => {
  return (
    <div class="retro-ui">
      <header class="menu-bar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Insert</span>
        <span>Format</span>
      </header>
      <div class="content">
        <p>90's Windows 스타일의 폰트를 적용한 예제입니다.</p>
      </div>
    </div>
  );
};

export default RetroUI;
