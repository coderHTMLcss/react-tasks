import { useState } from "react";
import { IContent } from "../../utils/types";
import { TabsWrapper } from "./styledTabs";


interface IContentProps {
    content: IContent[];
}

const Tabs: React.FC<IContentProps> = ({ content }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleClickTab = (index: number) => {
        setActiveTab(index)
    }

    return (
        <TabsWrapper>
            <ul className="tabs__list">
                {content.map((contentItem, index) => {
                    return <li
                        className={`tabs__item ${activeTab === index && 'active'}`}
                        onClick={() => handleClickTab(index)}
                        key={`${contentItem.title} + ${index}`}>{contentItem.title}
                    </li>
                })}
            </ul>
            <div className="tabs__content">{content[activeTab].content}</div>
        </TabsWrapper>
    )
};

export default Tabs