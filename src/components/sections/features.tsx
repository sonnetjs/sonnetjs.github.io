import clsx from 'clsx';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

type FeatureItem = {
  icon: string;
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '🚀',
    title: 'Native APIs',
    description: (
      <>
        Sonnet JS is a framework that allows you to write clean and organized
        JavaScript code using low-level APIs.
      </>
    ),
  },
  {
    icon: '🔥',
    title: 'Routing',
    description: (
      <>
        Built-in and easy to use routing system that allows you to create
        single-page applications with ease.
      </>
    ),
  },
  {
    icon: '🎉',
    title: 'SSR',
    description: (
      <>
        Server-side rendering supported out of the box. No need of extra runtime
        server renderer for your application.
      </>
    ),
  },
  {
    icon: '📦',
    title: 'No Configuration',
    description: (
      <>
        No configuration needed. Just start writing your code and see it in
        action in the browser with boilerplate.
      </>
    ),
  },
  {
    icon: '🚫',
    title: 'No Compiler',
    description: (
      <>
        No need of a compiler to compile your code. Just write your code in
        Vanilla Javascript blazingly fast.
      </>
    ),
  },
  {
    icon: '📈',
    title: 'No Learning Curve',
    description: (
      <>
        If you know JavaScript, you know Sonnet JS. No need to learn a new
        language or a new framework to get started.
      </>
    ),
  },
];

function Feature({ icon, title, description }: FeatureItem) {
  return (
    <Card>
      <CardHeader>
        <div
          className={clsx(
            'w-12 h-12 bg-muted/50 flex items-center justify-center rounded',
          )}
        >
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex items-center justify-center w-full min-h-screen px-0 py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
