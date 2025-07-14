import React from "react";
import style from "./index.module.css";

interface IBanner {
    bgImage: string;
    title: string;
    subTitle?: string;
}

const Banner = (props: IBanner) => {
    const { bgImage, title, subTitle } = props;

    return (
        <div
            className={style.bannerWrap}
            style={{ backgroundImage: `url("${bgImage}")` }}
        >
            <div className={`${style.content} container`}>
                {subTitle && <span>{subTitle}</span>}
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
