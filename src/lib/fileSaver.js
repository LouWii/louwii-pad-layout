
/**
 * Generate a file and trigger a file save dynamically
 * Copied from: https://stackoverflow.com/a/33542499
 * Triggers a click, hence some kind of "page load"
 * @param {String} filename 
 * @param {String} data 
 */
export const fileSave = function(filename, data) {
    const blob = new Blob([data], {type: 'text/csv'})
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename)
    } else {
        const elem = window.document.createElement('a')
        elem.href = window.URL.createObjectURL(blob)
        elem.download = filename
        document.body.appendChild(elem)
        elem.click()
        document.body.removeChild(elem)
    }
}