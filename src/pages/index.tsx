import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroSection from '@site/src/components/sections/hero-section';
import HomepageFeatures from '@site/src/components/sections/features';
import { SonnetTagline } from '@site/src/components/sections/sonnet-tagline';

import '../css/globals.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="bg-background">
        <HeroSection />
        <HomepageFeatures />
        <SonnetTagline />
      </main>
    </Layout>
  );
}
