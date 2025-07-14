import ArticleDetail from "@/src/components/organisms/ArticleDetails";
import Layout from "@/src/components/organisms/Layout";
import { IArticle } from "@/src/utils/interface/common";

export default function ArticleSlug(props: { articleData: IArticle }) {
    const { articleData } = props;

    return (
        <Layout metaData={{ title: articleData?.title }}>
            <ArticleDetail {...articleData} />
        </Layout>
    );
}

export async function getServerSideProps(context: any) {
    const { slug } = context.params;

    const res = await fetch(
        `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            articleData: res?.data?.[0],
        },
    };
}
