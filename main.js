// =All quotes:
let quoteArray = [{
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore et! Iste quod incidunt, provident qui cumque delectus inventore error!--0",
        author: "Lorem ipsum"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vitae dolor eos exercitationem reprehenderit, assumenda commodi sapiente maxime laborum ducimus.--1",
        author: "Volu ptatibus"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolorem nobis consectetur reprehenderit laborum dicta at in error fugiat fugit!--2",
        author: "ugiat fugit"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus magni aconsectetur amet? Ratione id quod libero sunt quae.--3",
        author: "magni at"
    }
]



// quote functionality::::
let quoteGenerateBtn = document.querySelector('button')

quoteGenerateBtn.addEventListener('click', quoteGenerateor)

let i = 0

function quoteGenerateor() {

    let target_text = document.getElementById('target-text')
    target_text.textContent = quoteArray[i].quote

    let targetAuthor = document.getElementById('authorName')
    targetAuthor.textContent = quoteArray[i].author

    i++

    if (i > quoteArray.length - 1) {
        i = 0
    }

}