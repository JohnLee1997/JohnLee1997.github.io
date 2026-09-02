// 仅部署到 https://johnlee1997.github.io/captcha.html；不要把该远程脚本页打进扩展安装包。
const TURNSTILE_SITE_KEY = '0x4AAAAAAEka4i0Kd2LPD8DM';

function notify(type, token = '') {
  window.parent.postMessage({ source: 'data-stats-captcha', type, token }, '*');
}

function showError(message) {
  const error = document.getElementById('error');
  error.hidden = false;
  error.textContent = message;
  notify('error');
}

window.addEventListener('load', () => {
  if (TURNSTILE_SITE_KEY.startsWith('REPLACE_')) {
    showError('人机验证尚未配置');
    return;
  }
  if (!window.turnstile) {
    showError('人机验证加载失败');
    return;
  }
  window.turnstile.render('#captcha', {
    sitekey: TURNSTILE_SITE_KEY,
    size: 'flexible',
    callback: token => notify('verified', token),
    'expired-callback': () => notify('expired'),
    'error-callback': () => notify('error'),
  });
});
