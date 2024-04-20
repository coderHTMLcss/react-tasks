import { NavigationProps } from "../../types/types"
import { StyledNavigationWrapper, StyledNavigationItem, StyledNavigationLink } from "./styledNavigation";

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
    return (
        <nav className="menu">
            <StyledNavigationWrapper>
                {navItems.map(navItem => {
                    return <StyledNavigationItem key={navItem.id}>
                        <StyledNavigationLink href={navItem.link}>{navItem.text}</StyledNavigationLink>
                    </StyledNavigationItem>
                })}
            </StyledNavigationWrapper>
        </nav>
    )
}

export default Navigation

