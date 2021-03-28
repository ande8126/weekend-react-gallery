import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( props ){
    return(
        <>
            <ul className="galleryGrid">
                { props.gallery.map( ( item ) => <GalleryItem item={item} getGallery = {props.getGallery} key={item.id}/> )}
            </ul>
        </>
    )
}

export default GalleryList