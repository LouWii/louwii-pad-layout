# MIDI Channel Change

Official list on [Midi.org](https://www.midi.org/specifications/item/table-3-control-change-messages-data-bytes-2)

## Script

Made a parsing script to generate a string that can be used to define the Map of MIDI channel change messages (see `src/lib/midi.js`).

```
const table = document.querySelector('table.maintext:nth-child(5)')

const rows = table.querySelectorAll('tbody tr')

let output = ''
rows.forEach(function(elt, idx){
    const rowCells = elt.querySelectorAll('td')
    if (rowCells.length === 6) {
        output += `[${rowCells[0].textContent}, `
        output += '{'
        output += `controlNum: ${rowCells[0].textContent}, `
        output += `controlNumBin: "${rowCells[1].textContent}", `
        output += `controlNumHex: "${rowCells[2].textContent}", `
        output += `desc: "${rowCells[3].textContent}", `
        output += `valueDesc: "${rowCells[4].textContent}"`
        output += '}],'
        output += "\n"
    }
})

console.log(output)
```