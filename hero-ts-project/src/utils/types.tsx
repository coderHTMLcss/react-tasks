export interface INavItems {
    link: string,
    text: string,
    id: string
}

export interface INavProps {
    navItems: INavItems[];
    logo?: string;
    isOpen?: boolean;
    handleToggle?: () => void;
    windowWidth?: number;
}

