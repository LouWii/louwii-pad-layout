# QMK Docs

## Parser

```
const table = document.querySelector('#main > table:nth-child(19)')

const rows = table.querySelectorAll('tbody tr')

let output = ''
rows.forEach(function(elt, idx){
    const rowCells = elt.querySelectorAll('td')

    output += `['${rowCells[0].textContent}', `
    output += `{`
    output += `name: '${rowCells[0].textContent}', `
    output += `desc: '${rowCells[2].textContent}'`
    output += `}],`
    output += "\n"
})

console.log(output)
```