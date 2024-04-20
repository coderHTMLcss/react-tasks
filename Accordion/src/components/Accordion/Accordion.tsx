import { useState } from "react";

import { AccordionButton, AccordionPanel } from '../Accordion/styledAccordion'

interface IAccordionProps {
    title: string,
    text: string
}

const Accordion: React.FC<IAccordionProps> = ({ title, text }) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <div>
                <AccordionButton className={`${isOpen && 'active'}`} onClick={handleClick}>{title}</AccordionButton>
                {isOpen && (<AccordionPanel>
                    <p>{text}</p>
                </AccordionPanel>)}
            </div>
        </>
    )
}

export default Accordion
