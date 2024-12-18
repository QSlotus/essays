function applyTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 用户偏好深色模式
        document.body.classList.add('bg-dark');
        document.body.classList.remove('bg-light');
    } else {
        // 用户偏好浅色模式
        document.body.classList.add('bg-light');
        document.body.classList.remove('bg-dark');
    }
}

// 页面加载时应用主题
applyTheme();

// 监听系统偏好变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    applyTheme();
});