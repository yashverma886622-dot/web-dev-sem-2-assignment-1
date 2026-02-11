const form=document.querySelector('.form')
const eventCards=document.querySelector('.cards')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(eventTitle.value)
    console.log(eventDate.value)
    console.log(category.value)
    console.log(description.value)

    let title=eventTitle.value
    let date=eventDate.value
    let cat=category.value
    let desc=description.value

    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
    <h3>${title}</h3>
    <p>🗓️ ${date}</p>
    <button>${cat}</button>
    <p>${desc}</p>
    <div class="dlt">x</div>
    `

    
    eventCards.appendChild(card)
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove()
    })

})


document.addEventListener('keydown',(event)=>{
    document.querySelector('.domContainer').innerText =
        `You pressed: ${event.key}`
})

document.querySelector('.clearall').addEventListener('click',()=>{
    document.querySelectorAll('.card').forEach((card)=>{
        card.remove()
    })
})

document.querySelectorAll('.events button')[1].addEventListener('click',()=>{
    
    const sampleEvents = [
        {
            title: "Tech Conference",
            date: "2026-03-10",
            cat: "Conference",
            desc: "A conference on latest technology trends."
        },
        {
            title: "Web Development Workshop",
            date: "2026-03-15",
            cat: "Workshop",
            desc: "Hands-on workshop on HTML, CSS and JavaScript."
        }
    ]

    sampleEvents.forEach((e)=>{
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <h3>${e.title}</h3>
            <p>🗓️ ${e.date}</p>
            <button>${e.cat}</button>
            <p>${e.desc}</p>
            <div class="dlt">x</div>
        `

        eventCards.appendChild(card)

        const dlt = card.querySelector('.dlt')
        dlt.addEventListener('click',()=>{
            card.remove()
        })
    })
})
