import {useState, useEffect} from 'react'

import { ContentSummary } from './components/ContentSummary'
import { SummaryPlans } from './components/SummaryPlans'
import { Button } from './components/Button'

import illustrationHero from './assets/images/illustration-hero.svg'
import patternMobile from './assets/images/pattern-background-mobile.svg'
import patternDesktop from './assets/images/pattern-background-desktop.svg'

export const App = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <main
      className="flex items-center justify-center min-h-screen bg-no-repeat bg-contain bg-pale-blue font-red-hat-display"
      style={{ backgroundImage: `url(${viewportWidth < 1023 ? patternMobile : patternDesktop})` }}
    >
      <section className="w-[93%] max-w-[26rem] mx-auto rounded-2xl overflow-hidden bg-very-pale-blue shadow-xl">
        <picture>
          <img
            src={illustrationHero}
            alt="Woman listen music"
            className="w-full"
          />
        </picture>

        <article className="text-desaturated-blue flex flex-col items-center justify-center text-center gap-6 self-center p-8">
          <ContentSummary
            title={"Order Summary"}
            paragraph={"You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"}
          />

          <SummaryPlans />

          <div className="flex flex-col gap-2 w-full">
            <Button paragraph={"Proceed to Payment"} />

            <Button paragraph={"Cancel Order"} style={"outline"} />
          </div>
        </article>
      </section>
    </main>
  )
}
