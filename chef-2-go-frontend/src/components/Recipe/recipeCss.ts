import React, { CSSProperties } from "react";
const ImgContStyling = (imgURL: string): CSSProperties => {
    return (
        {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "start",
            position: "relative",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundImage: `url(${imgURL})`,
            maxWidth: "100%",
            backgroundRepeat:"no-repeat"
        }
    )
};
const TitleContStyling: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "start",
    position: "relative",
    overflow: "hidden",
    backgroundSize: "cover",
    maxWidth: "100%"
};
const TitleStyling: CSSProperties = {
    position: "relative",
    display: "block",
    opacity: 1,
    visibility: "visible",
    transform: "translate(0px, 0px)",
    fontFamily: 'Morion'
}

const RecipeSummary: CSSProperties = {
    color: "hsl(173, 19%, 27%)",

}

const IngridentsList: CSSProperties = {
    color: "hsl(173, 19%, 27%)",
    fontSize: "1.5em",
    fontWeight: "bold"
}

export { ImgContStyling, TitleContStyling, TitleStyling, RecipeSummary, IngridentsList };