import React from "react";
import style from "./index.module.css";
import Link from "next/link";
import { IMetaData } from "@/src/utils/interface/layout";
import Head from "next/head";

interface ILayout {
    children: React.ReactNode;
    metaData?: IMetaData;
}

const Layout = (props: ILayout) => {
    const { children, metaData } = props;

    return (
        <>
            <Head>
                <title>{metaData?.title}</title>
                <meta name="description" content={metaData?.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={style.headerWrapper}>
                <nav className="container">
                    <Link href="/" className={style.logo}>
                        Knowledge Base
                    </Link>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/categories">Categories</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer className={style.footerWrap}>
                <div className="container">
                    <p>Copyright @ Knowledge Base</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
