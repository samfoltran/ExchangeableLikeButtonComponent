# Exchangeable LikeButton Component

This Exercise consists on creating a LikeButton that can be used anywhere in the app.
The onClick function must be abstract to  implement functions sent on props.

## Docs

### Properties

label (dom elements)
labelOnClicked (dom elements)
onClick (function)
multileClicks (boolean)

#### The 'label' and 'labelOnClicked' properties

The 'label' property sets the button label when the button IS NOT 'liked'.
The 'labelOnClicked' property sets the button label when the button IS 'liked'.
Both os them can be ignored, but a default label will be used instead

> If 'label' is ignored, default label will be used.
> If 'labelOnClicked' is ignored, 'label' will be used (if default, default will be used)

Both 'label' and 'labelOnClicked' can be any DOM element you want. Strings, HTML, SVG, Other React Compoentents 

#### The 'onClick' property

onClick receives a function that will be executed IF the button is not 'liked'.

#### The 'multileClicks' property

This boolean property, if 'true', will allow LikeButton to execute the setted onClick function everytime LikeButton is clicked.



## Example

### LikeButton on Blog Posts
The attached example implements LikeButton on a Blog environment.
BlogPost has a 'likes' counter, with a 'setLikes' function, that is passed to the LikeButton 'onClick' property, then LikeButton implements this function as configured

### Two different configuration examples

...
Infinite like
{...{
    label: 'Like',
    onClick: () => setLikes(likes+1),
    multileClicks: true,
}}

or

Only one like
{...{
    label: 'Like',
    labelOnClicked: 'Liked',
    onClick: () => setLikes(likes+1),
    multileClicks: false,
}}
...