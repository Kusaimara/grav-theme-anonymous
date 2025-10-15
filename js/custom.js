/**
 * Anonymous Theme - Custom JavaScript
 * Cyberpunk-style Grav CMS Theme
 * 
 * OPTIMIZED VERSION
 * - Twigテンプレートで既にクラスが設定されているため、
 *   applyFormStyling()は不要
 * - より軽量で高速
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Twemoji if available
    if (typeof twemoji !== 'undefined') {
        twemoji.parse(document.body);
    }

    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // NOTE: applyFormStyling()を削除
    // 理由：Twigテンプレートで既にクラスが設定されているため不要
    // 必要な場合は、custom_improved.jsのバージョンを使用してください
});

/**
 * Show a message notification
 * @param {string} message - Message text
 * @param {string} type - Message type: 'success', 'error', 'info'
 */
function showMessage(message, type = 'info') {
    const existingMessages = document.querySelectorAll('.flash-message');
    existingMessages.forEach(msg => msg.remove());

    const messageDiv = document.createElement('div');
    messageDiv.className = `flash-message flash-${type}`;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-panel);
        border: 2px solid ${type === 'success' ? 'var(--primary-green)' : 'var(--warning-red)'};
        color: ${type === 'success' ? 'var(--primary-green)' : 'var(--warning-red)'};
        padding: 20px 30px;
        z-index: 10000;
        font-family: 'Mono', 'Courier New', monospace;
        animation: fadeIn 0.3s ease;
        max-width: 400px;
        box-shadow: 0 0 20px ${type === 'success' ? 'rgba(0, 255, 65, 0.3)' : 'rgba(255, 0, 64, 0.3)'};
    `;
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Global API
window.AnonymousTheme = {
    showMessage
};