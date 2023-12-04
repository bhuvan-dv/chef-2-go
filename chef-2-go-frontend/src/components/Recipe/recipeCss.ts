import React, { CSSProperties } from "react";
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
    backgroundImage: `url(${`https://cdn.sanity.io/images/bhil6ydp/production/02a328cd3166c0e91e937ae2d9fb78c0ce17e9b5-6000x4000.jpg?w=2560&fm=webp`})`
};
const TitleStyling: CSSProperties = {
    position: "relative",
    display: "block",
    opacity: 1,
    visibility: "visible",
    transform: "translate(0px, 0px)",
    fontFamily: 'Morion'
}

export { TitleContStyling, TitleStyling };