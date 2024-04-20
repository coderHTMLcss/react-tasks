export interface INavItems {
    link: string,
    text: string,
    id: string
}

export interface NavigationProps {
    navItems: INavItems[];
}