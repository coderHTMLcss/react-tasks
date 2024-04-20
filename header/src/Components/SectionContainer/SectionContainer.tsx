import React, { ReactNode } from "react";
import StyledContainer from "./styledSectionContainer";


const SectionContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
};

export default SectionContainer;