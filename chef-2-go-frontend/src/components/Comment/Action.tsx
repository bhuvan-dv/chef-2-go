import React from "react";

type ActionProps = {
    handleClick: () => void;
    type: string | JSX.Element; // Modify the type here
    className: string;
};

const Action: React.FC<ActionProps> = ({ handleClick, type, className }) => {
    return (
        <div className={className} onClick={handleClick}>
            {type}
        </div>
    );
};

export default Action;
