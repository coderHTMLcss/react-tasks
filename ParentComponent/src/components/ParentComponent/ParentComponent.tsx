import ChildComponent from "../ChildComponent/ChildComponent";
import { useState } from "react";

const ParentComponent = () => {
    const [value, setValue] = useState('gogi');

    const handleChangeTitle = () => {
        setValue('fofi')
    }

    return (
        <ChildComponent title={value} handleChangeTitle={handleChangeTitle} />
    )
}

export default ParentComponent;

