import React from 'react';
import { useState} from 'react';

import { motion, MotionConfig } from "motion/react";

const STORY = {

  name: "Mehvishhhhhhh",

  birthdayLabel: "Happy Mehvishhhhhhh Day! ",

  heroLine: "My favourite person.",

  heroNote:

    "I’m grateful for everything that brought us together..",

  photos: {

    hero: "/photos/her.jpg",

    together: "/photos/us.jpg",

  },

  memories: [

    {

      date: "The beginning",

      title: "That first conversation.",

      description:

        "Our first conversation started with “all the best,” but look at us now.❤️",

      image: "/photos/first-memory.jpg",

      caption: "Where my favourite story started.",

    },

    {

      date: "A day I keep coming back to",

      title: "We didn’t need a perfect plan.",

      description:

        "Our first trip to Ayodhya, boating together and making memories we’ll always cherish❤️✨",

      image: "/photos/favourite-day.jpg",

      caption: "I’d do this day all over again.",

    },

    {

      date: "The everyday kind of magic",

      title: "Even an ordinary Tuesday.",

      description:

        "The little everyday moments that mean the most — our calls, walks, and sharing snacks together❤️",

      image: "/photos/ordinary-day.jpg",

      caption: "Especially the little moments.",

    },

  ],

  reasons: [

    {

      title: "Your mind.",

      text: "The way you get curious, ask questions, and see something I would have missed.",

    },

    {

      title: "Your kindness.",

      text: "The little ways you care for people, even when nobody is paying attention.",

    },

    {

      title: "Your laugh.",

      text: "Still one of my favourite sounds. Especially when I’m the reason for it.",

    },

    {

      title: "The real you.",

      text: "The girl who dances when she’s happy, helps others with all her heart, and still stays kind even when people don’t treat her the same.",

    },

  ],

  
letter: [
  "Dear Mehvish, ❤️",

  "Happy Birthdayyyy! 🥳💗",

  "I hope this little surprise puts a big smile on your face. And once you start smiling, no stoppinggg, okay? Hahaha, hehee! Keep that cute smile on your face and enjoy every little moment of your day.",

  "I genuinely wish you get everything your heart wishes for and all the happiness you give to others. You have this way of making things better just by being yourself, and I hope life gives you a thousand reasons to keep smiling, dancing, and being your crazy, happy self.",

  "You deserve so many good things, Mehvish, and I hope this new year of your life brings you closer to every little dream you have.",

  "And hey, today is YOUR day, so no overthinking, no worrying about anyone else. Just eat your favourite food, dance as much as you want, laugh loudly, and make some beautiful memories.",

  "Keep that smile safe, okay? Hehe. ❤️",

  "Happy Birthday once again, Mehvish! 🫶🏻✨",
],

  finalMessage:

    "Whatever this next year holds, I’m very happy I get to cheer for you.",

};

const entrance = {

  hidden: { opacity: 0, y: 24 },

  visible: { opacity: 1, y: 0 },

};

function Reveal({ children, className = "", delay = 0 }) {

  return (

    <motion.div

      className={className}

      variants={entrance}

      initial="hidden"

      whileInView="visible"

      viewport={{ once: true, amount: 0.15 }}

      transition={{

        duration: 0.7,

        delay,

        ease: [0.22, 1, 0.36, 1],

      }}

    >

      {children}

    </motion.div>

  );

}

function Photo({ src, alt, className = "", priority = false }) {

  const [failed, setFailed] = useState(false);

  return (

    <div className={`photo ${className}`}>

      {!failed ? (

        <img

          src={src}

          alt={alt}

          loading={priority ? "eager" : "lazy"}

          decoding="async"

          onError={() => setFailed(true)}


        />

      ) : (

        <div className="photo-placeholder" role="img" aria-label={alt}>

          <span aria-hidden="true">♡</span>

          <small>Add your photograph here</small>

        </div>

      )}

    </div>

  );

}

function SectionHeading({ number, eyebrow, children }) {

  return (

    <Reveal className="section-heading">

      <p className="eyebrow">

        <span>{number}</span> {eyebrow}

      </p>

      <h2>{children}</h2>

    </Reveal>

  );

}

function Letter() {

  const [open, setOpen] = useState(false);

  return (

    <section id="letter" className="section letter-section">

      <SectionHeading number="03" eyebrow="The words I wanted to keep">

        A little letter.

        <br />

        <em>Only for you.</em>

      </SectionHeading>

      <Reveal className="letter-container">

        <button

          type="button"

          className={`envelope ${open ? "is-open" : ""}`}

          aria-expanded={open}

          aria-controls="love-letter"

          onClick={() => setOpen((value) => !value)}

        >

          <span className="envelope-to">To {STORY.name}, with love</span>

          <span className="wax-seal" aria-hidden="true">♡</span>

          <span className="envelope-action">

            {open ? "Close your letter ↑" : "A few things from my heart ↗"}

          </span>

        </button>

        {open && (

          <motion.article

            id="love-letter"

            className="letter-paper"

            initial={{ opacity: 0, y: 16 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.45 }}

          >

            <p className="letter-greeting">My love,</p>

            {STORY.letter.map((paragraph, index) => (

              <p key={index}>{paragraph}</p>

            ))}

            <p className="signature">

              Always in your corner,

              <br />

              <span>{STORY.yourName}</span>

            </p>

          </motion.article>

        )}

      </Reveal>

    </section>

  );

}

function BirthdayFinale() {

  const [wished, setWished] = useState(false);

  return (

    <section id="wish" className="section finale">

      {wished && (

        <div className="confetti" aria-hidden="true">

          {Array.from({ length: 36 }, (_, index) => (

            <i

              key={index}

              style={{

                "--left": `${(index * 29) % 100}%`,

                "--delay": `${(index % 8) * 0.09}s`,

                "--rotation": `${index * 37}deg`,

                "--color": ["#e8b6bd", "#ebd39d", "#c6b6de"][index % 3],

              }}

            />

          ))}

        </div>

      )}

      <Reveal>

        <p className="eyebrow">One more little thing</p>

        <h2>

          A new year of you.

          <br />

          <em>Make a wish.</em>

        </h2>

        <div className="cake" aria-hidden="true">

          <div className="candles">

            {[0, 1, 2].map((index) => (

              <span className="candle" key={index}>

                {!wished && <span className="flame" />}

              </span>

            ))}

          </div>

          <div className="cake-top" />

          <div className="cake-base">

            <span>made with Happiness</span>

          </div>

          <div className="cake-plate" />

        </div>

        <button

          type="button"

          className="button button-light"

          onClick={() => setWished(true)}

          disabled={wished}

        >

          {wished ? "Here’s to your next chapter ♡" : "Make a wish & blow the candles"}

        </button>

        <div className="wish-message" role="status">

          {wished && (

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              Happy birthday, {STORY.name}.

              <br />

              {STORY.finalMessage}

            </motion.p>

          )}

        </div>

      </Reveal>

    </section>

  );

}

function Starfield() {

  const stars = Array.from({ length: 65 }, (_, index) => ({

    id: index,

    left: `${(index * 37 + 13) % 100}%`,

    top: `${(index * 61 + 7) % 100}%`,

    delay: `${(index % 9) * 0.4}s`,

    duration: `${3 + (index % 5)}s`,

    size: index % 7 === 0 ? 3 : 1.5,

  }))

  return (

    <div className="starfield" aria-hidden="true">

      {stars.map((star) => (

        <span

          key={star.id}

          className="star"

          style={{

            left: star.left,

            top: star.top,

            animationDelay: star.delay,

            animationDuration: star.duration,

            width: star.size,

            height: star.size,

          }}

        />

      ))}

    </div>

  )

}

function IntroScreen({ onEnter }) {

  return (

    <motion.section

      className="intro-screen"

      initial={{ opacity: 1 }}

      exit={{ opacity: 0 }}

    >

      <motion.span

        className="intro-star"

        animate={{ rotate: 360, scale: [1, 1.2, 1] }}

        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}

      >

        ✧

      </motion.span>

      <p className="eyebrow">A little something, just for you</p>

      <h1>

        A universe

        <br />

        <em>called you.</em>

      </h1>

      <p className="intro-note">

        Some things are too special to fit inside an ordinary page.

      </p>

      <button className="button button-light intro-button" onClick={onEnter}>

        Enter our little universe <span>↗</span>

      </button>

      <span className="intro-bottom">MADE WITH LOVE · JUST FOR YOU</span>

    </motion.section>

  )

}

export default function App() {

  const [entered, setEntered] = useState(false)

  return (

    <MotionConfig reducedMotion="user">

      <a className="skip-link" href="#main">Skip to the story</a>

{!entered && (

  <IntroScreen onEnter={() => setEntered(true)} />

)}

      <div className="site"  style={{

    display: entered ? "block" : "none",

  }}>

        <header className="header">

          <a href="#home" className="wordmark" aria-label="Back to the beginning">

            for you<span> ♡</span>

          </a>

          <nav aria-label="Main navigation">

            <a href="#memories">Our story</a>

            <a href="#letter">Your letter</a>

          </nav>

          <span className="header-note">A little corner of the internet. Yours.</span>

        </header>

        <main id="main">

          <section id="home" className="hero">

            <div className="hero-glow" aria-hidden="true" />

            <Reveal className="hero-copy">

              <p className="eyebrow">

                <span className="tiny-star" aria-hidden="true">✦</span>

                {STORY.birthdayLabel}

              </p>

              <h1>

                My favourite

                <br />

                <em>person.</em>

              </h1>

              <p className="hero-name">Happy birthday, {STORY.name}.</p>

              <p className="hero-description">{STORY.heroNote}</p>

              <a className="button button-light" href="#memories">

                I made you something <span aria-hidden="true">↗</span>

              </a>

              <span className="hero-footnote">

                Best enjoyed slowly. Like our favourite days.

              </span>

            </Reveal>

            <Reveal className="hero-art" delay={0.15}>

              <span className="orbit orbit-one" aria-hidden="true" />

              <span className="orbit orbit-two" aria-hidden="true" />

              <span className="art-star star-one" aria-hidden="true">✦</span>

              <span className="art-star star-two" aria-hidden="true">✧</span>

              <figure className="polaroid main-polaroid">

                <Photo

                  src={STORY.photos.hero}

                  alt={`${STORY.name}, my favourite person`}

                  priority

                />

                <figcaption>you, being my favourite.</figcaption>

              </figure>

              <figure className="polaroid small-polaroid">

                <Photo

                  src={STORY.photos.together}

                  alt="The two of us together"

                  priority

                />

                <figcaption>my kind of happy ♡</figcaption>

              </figure>

              <span className="handwritten art-note">

                yes, this whole

                <br />

                thing is for you.

              </span>

            </Reveal>

            <div className="hero-bottom">

              <span>A story I’m glad we’re in.</span>

              <a href="#memories" aria-label="Scroll to our memories">↓</a>

              <span>Keep going. There’s more.</span>

            </div>

          </section>

          <section id="memories" className="section memories-section">

            <SectionHeading number="01" eyebrow="Us, in a few moments">

              Some days become

              <br />

              <em>part of you.</em>

            </SectionHeading>

            <div className="memories">

              {STORY.memories.map((memory, index) => (

                <Reveal className="memory" key={memory.title}>

                  <figure className="memory-image">

                    <Photo src={memory.image} alt={memory.title} />

                    <figcaption>{memory.caption}</figcaption>

                  </figure>

                  <div className="memory-copy">

                    <span className="memory-index">0{index + 1}</span>

                    <p className="eyebrow">{memory.date}</p>

                    <h3>{memory.title}</h3>

                    <p>{memory.description}</p>

                  </div>

                </Reveal>

              ))}

            </div>

          </section>

          <section className="section reasons-section">

            <SectionHeading number="02" eyebrow="In case you ever forget">

              It’s not just that I love you.

              <br />

              <em>It’s all the reasons why.</em>

            </SectionHeading>

            <div className="reasons-grid">

              {STORY.reasons.map((reason, index) => (

                <Reveal className="reason" key={reason.title} delay={index * 0.05}>

                  <span className="reason-number">0{index + 1}</span>

                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>

                </Reveal>

              ))}

            </div>

            <Reveal className="little-note">

              And a hundred more things this website couldn’t hold.

            </Reveal>

          </section>

          <Letter />

          <BirthdayFinale />

        </main>

        <footer className="footer">

          <a className="wordmark" href="#home">for you ♡</a>
          <p className="footer-note">Made with love, just for you.</p>
          

        </footer>

      </div>

    </MotionConfig>

  );

}
