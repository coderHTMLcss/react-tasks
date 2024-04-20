import React from "react"
import StyledLogo from "./styledLogo"


interface ILogoAttributes {
    url: string,
    width: string,
    height: string,
    alt: string,
}

interface ILogoProps {
    props: ILogoAttributes
}

const Logo: React.FC<ILogoProps> = ({ props }) => {
    const { url, width, height, alt } = props
    return (
        <StyledLogo>
            <img src={url}
                width={width}
                height={height}
                alt={alt} />
        </StyledLogo>
    )
}


export default Logo