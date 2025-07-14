import { IArticle } from "@/src/utils/interface/common";
import React from "react";
import style from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

interface IArticleCard extends IArticle {
    className?: string;
}

const ArticleCard = (props: IArticleCard) => {
    const { title, slug, className, coverImage, category } = props;

    return (
        <div className={`${style.cardWrap} ${className}`}>
            <Link href={`/articles/${slug}`}>
                <figure>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL}${coverImage?.url}`}
                        alt={title}
                        fill
                    />
                </figure>
                <h3>{title}</h3>
                <span>{category?.name}</span>
            </Link>
        </div>
    );
};

export default ArticleCard;
