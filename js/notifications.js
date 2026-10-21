// Toast Notifications
function showToast(message, type = 'success') {
    const toast = elements.toast;
    const messageEl = elements.toastMessage;
    
    if (!toast || !messageEl) return;
    
    messageEl.textContent = message;
    toast.classList.remove('hidden');
    toast.querySelector('.toast-icon').style.fill = type === 'error' ? 'var(--error)' : 'var(--bg-primary)';
    toast.querySelector('.toast-content').style.background = type === 'error' ? 'var(--error)' : 'var(--success)';
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
