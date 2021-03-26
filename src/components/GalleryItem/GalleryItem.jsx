function GalleryItem( props ){
    return(
        <>   
            <li> 
            <img src={props.item.path} /> 
            {props.item.description}
            {props.item.likes} 
            </li>
        </>
    )
}

export default GalleryItem