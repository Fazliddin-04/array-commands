const myArray = []

while (true) {
    let cmdPrompt = prompt('Buyruq kiriting (add/del, ... / stop)')
    const cmdArr = cmdPrompt.split(', ')
    let cmd = cmdArr[0]
    let content = cmdArr[1]
    if (cmd == 'add') {
        myArray.push(content)
        console.log(myArray);
    } else if (cmd == 'del') {
        let pos = myArray.indexOf(content)
        if (pos == -1) {
            alert('UPS! Nimadir xato ketti...')
            continue
        }
        myArray.splice(pos, 1)
        console.log(myArray);
    } else if (cmd == 'stop') {
        break
    } else {
        alert('UPS! Nimadir xato ketti...')
        continue
    }
}