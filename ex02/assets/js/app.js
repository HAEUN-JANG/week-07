const blogContainer = document.querySelector('.blog-container')
const titleControl = document.querySelector('#title');
const contentControl = document.getElementById('content');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const title = titleControl.value;
    const content = contentControl.value;

    if (!title.trim() || !content.trim()) return;
    const li = makeBlogElement(title, content);
    blogContainer.appendChild(li);
    titleControl.value = '';
    contentControl.value = '';
})

function makeBlogElement(title, content) {
    const li = document.createElement('li');
    console.log(li);
    li.innerHTML = `<h4 class="item-title">${title}</h4>
    <p>${content.replace(/\n/g, '<br>')}</p>`;

    return li;
}