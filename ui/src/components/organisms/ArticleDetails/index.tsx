import { IArticle } from "@/src/utils/interface/common";
import React from "react";
import Banner from "../../molecules/Banner";
import SectionHeading from "../../atoms/SectionHeading";

const ArticleDetail = (props: IArticle) => {
    const { title, coverImage, content, category } = props;

    return (
        <>
            <div className="sectionWrapper">
                <Banner
                    bgImage={`${process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL}${coverImage?.url}`}
                    title={title}
                    subTitle={category?.name}
                />
            </div>
            <div className="container">
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </>
    );
};

export default ArticleDetail;
