const Search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const no = document.getElementById("no");
const v = document.getElementById("video");
const Link = document.getElementById("Link");
const categoryDrop = document.getElementById("category");
const animeDrop = document.getElementById("anime");

categoryDrop.addEventListener("change", () => {
    const category = categoryDrop.value;
    cards.forEach((card) => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display="flex";
        }
        else {
            card.style.display="none";
        }
    });

})
animeDrop.addEventListener("change", () => {
    const anime = animeDrop.value;
    cards.forEach((card) => {
        if (anime === "all" || card.classList.contains(anime)) {
            card.style.display="flex";
        }
        else {
            card.style.display="none";
        }
    });

})
Search.addEventListener("input",()=>
    {
        const value = Search.value.toLowerCase();
        let match = 0;
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
        if(text.includes(value))
        {
            match=1;
            card.style.display="flex";
        }
        else
        {
            card.style.display="none";
        }
        if(match===1)
        {
            no.style.display="none";
        }
        else
        {
            no.style.display="block";
        }
    });
});

