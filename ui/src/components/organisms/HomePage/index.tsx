import React from "react";
import Banner from "../../molecules/Banner";
import SectionHeading from "../../atoms/SectionHeading";
import { IArticle } from "@/src/utils/interface/common";
import style from "./index.module.css";
import ArticleCard from "../../molecules/ArticleCard";

interface IHomePage {
    articles?: IArticle[];
}

const HomePage = (props: IHomePage) => {
    const { articles } = props;

    return (
        <>
            <div className="sectionWrapper">
                <Banner bgImage="/banner.jpg" title="Knowledge Base Explorer" />
            </div>
            <div className="container">
                <SectionHeading heading="Popular Articles" />
                <div className={style.cardsWrap}>
                    {articles?.map((article: IArticle, index: number) => (
                        <ArticleCard
                            key={`article_${index}`}
                            {...article}
                            className={style.singleCard}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;
