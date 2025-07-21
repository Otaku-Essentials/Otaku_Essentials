const Search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const no = document.getElementById("no");
const v = document.getElementById("video");
const Link = document.getElementById("Link");
Search.addEventListener("input",()=>
    {
        const value = Search.value.toLowerCase();
        let match = 0;
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
        if(text.includes(value))
        {
            match=1;
            card.style.display="block";
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

