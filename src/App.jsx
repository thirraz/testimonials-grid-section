import "./App.css";

import quoteIcon from "./assets/images/bg-pattern-quotation.svg";

//user's icon
import daniel from "./assets/images/image-daniel.jpg";
import jonathan from "./assets/images/image-jonathan.jpg";
import jeanette from "./assets/images/image-jeanette.jpg";
import patrick from "./assets/images/image-patrick.jpg";
import kira from "./assets/images/image-kira.jpg";

const App = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center bg-blue-100 font-barlow pb-24">
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-7 text-white w-90pc mt-8">
        {/* user 1 */}
        <article className="card bg-violet-700 relative lg:col-span-2">
          <img
            src={quoteIcon}
            alt="quotation icon"
            className="w-32 h-32 absolute right-5 lg:right-32 top-0 z-10"
          />
          <div className="user-infos">
            <img
              className="user-icon border-violet-300"
              src={daniel}
              alt="user's profile pic icon"
            />
            <div className="flex flex-col">
              <p className="text-normal">Daniel Clifford</p>
              <p className="text-verySmall opacity-60">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-h2Size mb-6 font-bold relative z-20">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </h1>

          <q className="mt-4 opacity-60h2">
            I was an EMT for many years before I joined the bootcamp. I've ben
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup.
          </q>
        </article>
        {/* user 2 */}
        <article className="card bg-slate-600">
          <div className="user-infos">
            <img
              className="user-icon border-violet-300"
              src={jonathan}
              alt="user's profile pic icon"
            />
            <div className="flex flex-col">
              <p className="text-normal">Daniel Clifford</p>
              <p className="text-verySmall opacity-60">Verified Graduate</p>
            </div>
          </div>
          <h2 className="text-h2Size mb-6 font-bold">
            The team was very supportive and kept me motivated
          </h2>
          <q className="mt-4 opacity-60">
            I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself.
          </q>
        </article>
        {/* user 3 */}
        <article className="card bg-white lg:col-start-1 shadow-2xl">
          <div className="user-infos">
            <img
              src={jeanette}
              alt="user profile pic icon"
              className="user-icon border-none"
            />
            <div className="flex flex-col">
              <p className="text-normal text-slate-700">Jeanette Harmon</p>
              <p className="text-verySmall text-slate-400">Verified Graduate</p>
            </div>
          </div>
          <h2 className="text-h2Size mb-6 text-slate-700 font-bold">
            An overall wonderful and rewarding experience
          </h2>
          <q className="mt-4 opacity-60 text-slate-800">
            Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love.
          </q>
        </article>
        {/* user 4 */}
        <article className="card bg-slate-900 lg:col-span-2">
          <div className="user-infos">
            <img
              src={patrick}
              alt="user profile pic icon"
              className="user-icon border-purple-800"
            />
            <div className="flex flex-col">
              <p className="text-normal text-white">Patrick Abrams</p>
              <p className="text-verySmall opacity-60">Verified Graduate</p>
            </div>
          </div>
          <h2 className="text-h2Size mb-6 font-bold">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h2>
          <q className="mt-4 opacity-60 text-slate-200">
            The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people.
          </q>
        </article>
        {/* user 4 */}
        <article className="card bg-white lg:px-14 lg:row-start-1 lg:col-start-4 lg:row-span-2 shadow-xl">
          <div className="user-infos">
            <img
              src={kira}
              alt="user profile icon"
              className="user-icon border-none"
            />
            <div className="flex flex-col">
              <p className="text-normal text-slate-700">Kira Whittle</p>
              <p className="text-verySmall text-slate-400">Verified Graduate</p>
            </div>
          </div>
          <h2 className="text-h2Size mb-6 text-slate-700 font-bold">
            Such a life-changing experience. Highly recommended!
          </h2>
          <p className="mt-4 opacity-60 text-slate-700">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during, interviews as an
            example of my development experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </article>
      </div>
    </main>
  );
};

export default App;
