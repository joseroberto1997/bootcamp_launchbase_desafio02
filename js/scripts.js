const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')


for(let recipe of recipes) {
    recipe.addEventListener("click", function(){


        const imgId = recipe.getAttribute("id")
        const recipeH2 = recipe.querySelector('h2').textContent
        const recipeP = recipe.querySelector('p').textContent

        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src =`/assets/${imgId}.png`
        modalOverlay.querySelector(".modal-content-description h1").textContent = recipeH2
        modalOverlay.querySelector(".modal-content-description p").textContent = recipeP

    })
}


document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})



