
const repoContainer = document.getElementById('container');
const moreButton = document.getElementById('load-more');

let nowPage = 1; 


function fetchRepos(nowPage) {
    const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${nowPage}`;

    return fetch(url)
        .then(response => response.json())
        .catch(error =>repoContainer.innerHTML=`Somethung is wrong here!`);
}


function render(repo) {
    const repoElement = document.createElement('div');
    repoElement.classList.add('repo-item');
    repoElement.innerHTML = `
        <h3>Name: ${repo.name}</h3>
        <p>Visibility: ${repo.private ? 'Private' :'Public'}</p>
        <p>Description: ${repo.description|| 'N/A'}</p>
        <p>Topics: ${repo.topics.join(' , ') || 'N/A'}</p>
        <hr> `;
   
    repoContainer.appendChild( repoElement);


}


moreButton.addEventListener('click',()=> {
    console.log('moreButton clicked');

    nowPage=nowPage+1;

    
    fetchRepos(nowPage)
        .then(data => {
           data.forEach(repo => {
                render(repo);
            });
        });
});

fetchRepos(nowPage)
        .then(data => {
           data.forEach(repo => {
                render(repo);
            });
        });