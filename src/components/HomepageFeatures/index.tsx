import clsx from 'clsx';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Native APIs',
    description: (
      <>
        Sonnet JS is a framework that allows you to write clean and organized JavaScript code using low-level APIs.  
      </>
    ),
  },
  {
    title: 'Routing',
    description: (
      <>
        Built-in and easy to use routing system that allows you to create single-page applications with ease.
      </>
    ),
  },
  {
    title: 'SSR',
    description: (
      <>
        Server-side rendering supported out of the box. No need of extra runtime server renderer for your application.
      </>
    ),
  },
  {
    title: 'No Configuration',
    description: (
      <>
        No configuration needed. Just start writing your code and see it in action in the browser with boilerplate.
      </>
    ),
  },
  {
    title: 'No Compiler',
    description: (
      <>
        No need of a compiler to compile your code. Just write your code in Vanilla Javascript blazingly fast.
      </>
    ),
  },
  {
    title: 'No Learning Curve',
    description: (
      <>
        If you know JavaScript, you know Sonnet JS. No need to learn a new language or a new framework to get started.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('p-4 rounded-lg border bg-card text-card-foreground shadow-sm border-neutral-300 border-solid')}>
      <div className="text-center space-y-3">
        <h3 className='text-xl m-0 font-bold'>{title}</h3>
        <p className='m-0'>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex justify-center items-center px-0 py-8 w-full min-h-screen">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
