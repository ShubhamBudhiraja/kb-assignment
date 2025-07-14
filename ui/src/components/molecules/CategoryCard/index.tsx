import Link from "next/link";
import React from "react";
import style from "./index.module.css";
import Image from "next/image";
import { ICategory } from "@/src/utils/interface/common";

interface ICategoryCard extends ICategory {
    className?: string;
}

const CategoryCard = (props: ICategoryCard) => {
    const { slug, name, thumbnail, className } = props;

    return (
        <div className={`${style.cardWrap} ${className}`}>
            <Link href={`/categories/${slug}`}>
                <figure>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL}${thumbnail?.url}`}
                        alt={name}
                        fill
                    />
                </figure>
                <h3>{name}</h3>
            </Link>
        </div>
    );
};

export default CategoryCard;
