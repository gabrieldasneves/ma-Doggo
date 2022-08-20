const BreedURL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector('.breed');


a = fetch(BreedURL).then( res => {
    return res.json();
})
.then( data => {
    const obj = data.message;
    const breeds = Object.keys(obj);
    for (let i = 0; i < breeds.length; i++) {
        const option = document.createElement('option');
        option.value = breeds[i];
        option.innerText = breeds[i];
        select.appendChild(option);
      }
});

const img = document.querySelector('.dog_img');
select.addEventListener('change', event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.src = data.message;
    });
});

