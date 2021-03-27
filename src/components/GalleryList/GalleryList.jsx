import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( props ){
    return(
        <>
            <ul>
                { props.gallery.map( ( item, index ) => <GalleryItem item={item} getGallery = {props.getGallery} key={index}/> )}
            </ul>
        </>
    )
}

export default GalleryList