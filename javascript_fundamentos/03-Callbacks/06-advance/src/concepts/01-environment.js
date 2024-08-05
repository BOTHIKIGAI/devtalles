/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) => {

    console.log( import.meta.env )

    const html = `
        vairables: ${ import.meta.env.DEV } <br/>
        vairables: ${ import.meta.env.PROD } <br/>
        vairables: ${ import.meta.env.VITE_API_KEY } <br/>
        vairables: ${ import.meta.env.VITE_BASE_URL } <br/>
    `

    element.innerHTML = html;

}