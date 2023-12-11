import React from "react";
import Instruction from "./Instruction";
type RecipeProps = {
    instructions?: string[]
};

const RecipeInstructions: React.FC<RecipeProps> = ({ instructions = [] }) => {
    return (
        <div className="flex justify-between align-middle" style={{width:"100%"}}>
            <div></div>
            <div style={{margin:"0 auto",}}>
                <Instruction instructions={instructions} />
            </div>
            <div>
            </div>
        </div>
    );
};

export default RecipeInstructions;