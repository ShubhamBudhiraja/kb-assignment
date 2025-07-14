import CategorySlug from "@/src/components/organisms/CategorySlug";
import Layout from "@/src/components/organisms/Layout";
import { IArticle, ICategory } from "@/src/utils/interface/common";

export default function Categories(props: {
    articles: IArticle[];
    name: string;
}) {
    const { articles, name } = props;

    return (
        <Layout metaData={{ title: "Categories" }}>
            <CategorySlug articles={articles} title={name} />
        </Layout>
    );
}

export async function getServerSideProps(context: any) {
    const { slug } = context.params;

    const res = await fetch(
        `http://localhost:1337/api/articles?filters[category][slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            articles: res?.data,
            name: res?.data?.[0]?.category?.name,
        },
    };
}
