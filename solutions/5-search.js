export default (doc) => ({
  title: doc.querySelector('.content h1')?.textContent.trim() || '',
  description: doc.querySelector('.content .description')?.textContent.trim() || '',
  items: [...doc.querySelectorAll('.links > div')].map(article => ({
    title: article.querySelector('h2 a')?.textContent.trim() || '',
    description: article.querySelector('p')?.textContent.trim() || ''
  }))
});