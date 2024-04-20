import StyledButton from "./styledButton";


interface IMainButtonProps {
    children: string;
}

function MainButton({ children }: IMainButtonProps) {
    return (
        <StyledButton $primary type="button">
            {children}
        </StyledButton>
    )
}

export default MainButton
