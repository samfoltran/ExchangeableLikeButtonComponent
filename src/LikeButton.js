import {useState} from "react";

export function LikeButton(props){

    const [liked, setLiked] = useState(false);

    function handleClick(){
        setLiked(true);

        if(props.onClick){
            if (!liked) props.onClick();
            if (liked && props.multileClicks) props.onClick();
        }
    }

    const default_label = (props.label) ? props.label : 'Default Label'
    let label =
        (!liked)
        ? default_label
        : (props.labelOnClicked) ? props.labelOnClicked : default_label
    ;

    return(
    <button
        onClick={handleClick}>
            {label}
    </button>
    );
}