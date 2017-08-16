const dog_api = 'https://dog.ceo/api/'

// let search = 'all'

$.ajax({
    url: dog_api + "breeds/list/all"
}).done(function(response) {

    const breeds = Object.keys(response.message)
    console.log(response);
    console.log(breeds);

    for (let i = 0; i < breeds.length; i++) {
        selectBreed.innerHTML += `<option value="${breeds[i]}">${breeds[i]}</option>`

    }
})

viewDog.addEventListener('click', function() {
    const breedName = selectBreed.value

    $.ajax({
        url: `${dog_api}breed/${breedName}/images/random`
    }).done(function(response) {

        breedImage.setAttribute("src", response.message)


    })
})
