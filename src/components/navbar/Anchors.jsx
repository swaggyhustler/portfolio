/* eslint-disable react/prop-types */

const Anchors = (props) => {
    return <a href="#"><img src={`${props.source}.png`} alt={`${props.text} image`} /></a>;
}

export default Anchors;
