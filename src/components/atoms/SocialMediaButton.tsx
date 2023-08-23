


const SocialMediaButton = (props:{href:string, image:string}) => {
    return (
        <a href={props.href} target="_blank">
            <img src={props.image} className="w-10 h-10"/>
        </a>
    )
}

export default SocialMediaButton