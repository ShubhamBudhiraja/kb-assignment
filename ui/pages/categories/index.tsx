import CategoriesLandingPage from "@/src/components/organisms/Categories";
import Layout from "@/src/components/organisms/Layout";
import { ICategory } from "@/src/utils/interface/common";

export default function Categories(props: { categories: ICategory[] }) {
    const { categories } = props;

    return (
        <Layout metaData={{ title: "Categories" }}>
            <CategoriesLandingPage categoriesData={categories} />
        </Layout>
    );
}

export async function getStaticProps() {
    const categoriesRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/categories?populate=*`
    ).then((res) => res.json());

    return {
        props: {
            categories: categoriesRes?.data,
        },
    };
}
