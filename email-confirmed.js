(() => {
  const query = new URLSearchParams(location.search);
  const fragment = new URLSearchParams(location.hash.replace(/^#/, ''));
  const error = fragment.get('error_description') || fragment.get('error') || query.get('error_description') || query.get('error');
  if (error) {
    document.body.dataset.state = 'error';
    document.getElementById('statusIcon').innerHTML = '<path d="M16 16l16 16M32 16 16 32" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>';
    document.getElementById('confirmationTitle').textContent = '验证链接不可用';
    document.getElementById('confirmationWelcome').textContent = '邮箱验证尚未完成';
    document.getElementById('confirmationDescription').textContent = '该确认链接可能已经过期或被使用。请返回扩展重新发送确认邮件。';
    document.getElementById('nextStepTitle').textContent = '如何继续？';
    document.getElementById('nextStepText').textContent = '打开 Chrome 扩展，在登录页面点击“没有收到确认邮件？”，重新发送后使用最新邮件中的链接。';
  }
  if (location.search || location.hash) history.replaceState(null, '', location.pathname);
})();
