import { IArticle } from "@/src/utils/interface/common";
import React from "react";
import Banner from "../../molecules/Banner";
import ArticleCard from "../../molecules/ArticleCard";
import SectionHeading from "../../atoms/SectionHeading";
import style from "./index.module.css";

interface ICategorySlug {
    articles: IArticle[];
    title: string;
}

const CategorySlug = (props: ICategorySlug) => {
    const { articles, title } = props;

    return (
        <>
            <div className="sectionWrapper">
                <Banner
                    // bgImage={`${process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL}${thumbnail}`}
                    bgImage="/banner.jpg"
                    title={title}
                />
            </div>
            <div className="container">
                <SectionHeading heading="Popular Articles In The Category" />
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

export default CategorySlug;
