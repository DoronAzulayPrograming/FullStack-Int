let xSymbol = "x", oSymbol = "o"
let turn = true

let btns = document.querySelectorAll("button")

for(let i = 0; i < btns.length; i++){
    let btn = btns[i]
    btn.addEventListener("click", btnClick)
}

function btnClick(e:Event){
    let btn = e.target! as HTMLElement
    if(btn.textContent != "") return

    if(turn) btn.textContent = xSymbol
    else btn.textContent = oSymbol

    if(checkWin()){
        let msg = ""
        if(turn) msg += xSymbol
        else msg += oSymbol

        setTimeout(()=> {
            alert("Yhayy ->" + msg + "<- is win.")
            resetBoard()
        }, 100)
    }

    turn = !turn
}


function checkWin(){
    let btns = document.querySelectorAll("button")

    if(btns[0].textContent != "" && btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent)
        return true
    else if(btns[3].textContent != "" && btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent)
        return true
    else if(btns[6].textContent != "" && btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent)
        return true
    else if(btns[0].textContent != "" && btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent)
        return true
    else if(btns[2].textContent != "" && btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent)
        return true
    else return false
}


function resetBoard(){
    let btns = document.querySelectorAll("button")

    for(let i = 0; i < btns.length; i++){
        let btn = btns[i]
        btn.textContent = ""
    }
}