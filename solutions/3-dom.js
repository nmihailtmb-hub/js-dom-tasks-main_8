const lines = document.body.innerHTML.split('\n').filter(l => l.trim());
document.body.innerHTML = lines.map(l => `<p>${l.trim()}</p>`).join('\n');