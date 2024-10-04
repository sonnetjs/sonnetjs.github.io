import clsx from 'clsx';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { cn } from '@site/src/lib/utils';

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

function Feature({ title, description }: FeatureItem) {
  const Icon = ({
    className,
    ...rest
  }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div
        {...rest}
        className={cn(
          'dark:border-zinc-200 border-zinc-700 size-6 absolute',
          className,
        )}
      />
    );
  };
  return (
    <div className="relative border-2 rounded-md border-zinc-100 dark:border-zinc-700">
      <Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
      <Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
      <Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
      <Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </div>
  );
}
export function HomepageFeatures(): JSX.Element {
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
