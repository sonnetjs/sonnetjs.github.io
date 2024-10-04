import BlurIn from '@site/src/components/ui/blur-in';

export function SonnetTagline() {
  return (
    <div className="container">
      <div className="z-10 flex items-center justify-center min-h-screen">
        <BlurIn
          className="sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          word="Sonnet JS will change the way you write JavaScript."
        />
      </div>
    </div>
  );
}
