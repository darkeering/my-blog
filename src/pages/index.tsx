import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={`${clsx("hero", styles.heroBanner)} ${styles.transparent}`}
    >
      <div className={`container ${styles.posi}`}>
        <h1 className={`hero__title ${styles.title}`}>{siteConfig.title}</h1>
        <p className={`hero__subtitle ${styles.subtitle}`}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Start
          </Link> */}
          <h2>介绍</h2>
          <p>
            本人是一个前端开发，工作之余也喜欢研究点其他的，这个网站主要是用来记录工作和学习的，希望能过够在这里找到你感兴趣的
          </p>
          <p>流金岁月，记录美好生活</p>
          <h2>技术栈</h2>
          <ul>
            <li>Angular，React</li>
            <li>Nginx</li>
            <li>Http</li>
            <li>Module Fedreration</li>
            <li>Docker</li>
            <li>
              <strong>...</strong>
            </li>
          </ul>
          <p>学习到的会及时补充进来的</p>
          <h2>其他</h2>
          <p>
            其中也会涉及一些工具的使用，比如搭建本网站的
            Docusaurus，还有试过的一些其他的
            Vuepress，又比如搭建组件库的一些框架，比如 dumi 等
          </p>
          <h2>链接</h2>
          <ul>
            <li>
              <a href="https://github.com/darkeering">Github</a>
            </li>
            <li>
              <a href="https://juejin.cn/user/1374842339470604/posts">
                稀土掘金
              </a>
            </li>
          </ul>
        </div>
        <div style={{ height: "140px" }}></div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.bg}></div>
      <div className={styles.content}>
        <HomepageHeader />
      </div>
    </Layout>
  );
}
