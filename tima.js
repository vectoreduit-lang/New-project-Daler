    let a =document.getElementById("const1")
    for(let i=1; i<7; i++)
    {
        let divv = document.createElement("div")
        divv.className = "box"
        divv.id = "box" + i
        a.appendChild(divv)
    }