import { useEffect } from "react";

const Title = ({ value }) => {
    useEffect(() => {
        document.title = value;
    }, [value]);
    return null;
};

export default Title;
