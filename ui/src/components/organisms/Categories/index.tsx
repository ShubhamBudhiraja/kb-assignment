import React from "react";
import Banner from "../../molecules/Banner";
import SectionHeading from "../../atoms/SectionHeading";
import style from "./index.module.css";
import { ICategory } from "@/src/utils/interface/common";
import CategoryCard from "../../molecules/CategoryCard";

const CategoriesLandingPage = (props: { categoriesData: ICategory[] }) => {
    return (
        <>
            <div className="sectionWrapper">
                <Banner bgImage="/banner.jpg" title="Categories" />
            </div>
            <div className="container">
                <SectionHeading heading="All Categories" />
                <div className={style.cardsWrap}>
                    {props?.categoriesData?.map(
                        (article: ICategory, index: number) => (
                            <CategoryCard
                                key={`article_${index}`}
                                {...article}
                                className={style.singleCard}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default CategoriesLandingPage;
