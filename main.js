const imgs = document.querySelectorAll( '.img' );


imgs.forEach(item => {
    item.addEventListener('click', _ => {
        deleteActive();
        delActive();
        item.classList.add( 'active' );
    } )
})

function delActive() {
    imgs.forEach(item => {
        item.classList.remove( 'active' );
    })
}
function deleteActive() {
    imgs.forEach(item => {
        item.addEventListener('click', _ => {
            item.classList.toggle( 'active' );
        })
        
    })
}