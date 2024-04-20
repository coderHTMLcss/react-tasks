import Logo from "../Logo/Logo";
import SectionContainer from "../SectionContainer/SectionContainer";
import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";
import MainButton from "../MainButton/MainButton";
import { NavigationProps } from "../../types/types";
import StyledHeader from "./StyledHeader";


const Header: React.FC<NavigationProps> = ({ navItems }) => {

    return (
        <StyledHeader aria-label="navigation bar">
            <SectionContainer>
                <Logo props={
                    {
                        url: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1712448000&semt=ais",
                        width: "47",
                        height: "47",
                        alt: "Inc Logo",
                    }
                }
                />
                <Navigation navItems={navItems} />
                <SearchInput />
                <MainButton>Send</MainButton>
            </SectionContainer>
        </StyledHeader>
    )
}

export default Header