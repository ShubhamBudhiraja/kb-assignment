import HomePage from "@/src/components/organisms/HomePage";
import Layout from "@/src/components/organisms/Layout";
import { IArticle } from "@/src/utils/interface/common";

export default function Home(props: { articles: IArticle[] }) {
    const { articles } = props;

    return (
        <Layout
            metaData={{
                title: "Knowledge Base Explorer — Next.js + Strapi",
            }}
        >
            <HomePage articles={articles} />
        </Layout>
    );
}

export async function getStaticProps() {
    const [articlesRes, categoriesRes] = await Promise.all([
        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/articles?populate=*`
        ).then((res) => res.json()),
        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/categories?populate=*`
        ).then((res) => res.json()),
    ]);

    return {
        props: {
            articles: articlesRes?.data,
            categories: categoriesRes?.data,
        },
    };
}
