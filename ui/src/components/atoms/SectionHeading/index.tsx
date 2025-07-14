import React from "react";
import style from "./index.module.css";

interface ISectionHeading {
    heading: string;
    subHeading?: string;
}

const SectionHeading = (props: ISectionHeading) => {
    const { heading, subHeading } = props;

    return (
        <div className={style.headingWrap}>
            <h2>{heading}</h2>
            <span>{subHeading}</span>
        </div>
    );
};

export default SectionHeading;
