(function(){
  const cfg = window.AppConfig || {};
  const getMode = () => localStorage.getItem("readingMode") || (cfg.DEFAULT_MODE || "dark");
  function apply(mode){
    document.body.classList.remove("dark","eyecare","lightgray","paper");
    document.body.classList.add(mode);
  }

  // Reader
  async function initReader(){
    apply(getMode());
    // 其餘章節載入邏輯保持你現有版本
  }

  // Settings (全域套用)
  function initSettings(){
    // 先以目前全域模式渲染本頁
    apply(getMode());

    // 切換時：1) 寫入 localStorage、2) 立即更新本頁、3) 回閱讀頁也會套用
    window.chooseMode = (mode)=>{
      localStorage.setItem("readingMode", mode);
      apply(mode);
      const now = document.getElementById("currentMode");
      if(now) now.textContent = mode + "（已套用到閱讀器）";
    };
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementById("chapterList")) initReader();
    if(document.getElementById("settingsPage")) initSettings();
  });
})();