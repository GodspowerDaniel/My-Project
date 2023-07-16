const article = document.querySelectorAll('.article-one');

article.forEach(article => {
    article.addEventListener('click', () => {
        article.classList.toggle('open');
    })
})