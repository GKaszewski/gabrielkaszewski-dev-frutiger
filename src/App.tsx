import home from './assets/icons/home.png';
import folder from './assets/icons/folder.png';
import games from './assets/icons/games.png';
import cv from './assets/icons/cv.png';
import about from './assets/icons/about.png';
import disc from './assets/icons/disc.png';

function App() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-[url('./assets/backgrounds/background2.jpg')] bg-cover bg-center">
      <div className="w-full max-w-[980px] max-h-[930px] flex-1 flex flex-col glass-sm  rounded-2xl rounded-br-none border-midnight border-[2px]">
        <header className="flex p-[30px] items-center gap-4 rounded-t-2xl text-white border-b-0 aero-gradient">
          <h1 className="text-2xl font-semibold">Gabriel Kaszewski</h1>
          <h2 className="text-lg font-normal">Full-stack Developer</h2>
        </header>
        <section className="grid grid-cols-6 w-full h-full flex-1 gap-8 overflow-y-auto">
          <aside className="col-span-2 aero-gradient-dark p-4 rounded-bl-2xl flex flex-col gap-2 items-stretch overflow-y-auto">
            <section className="aero-gradient-dark text-white p-1 rounded-sm">
              <p className="aero-gradient p-2 border-b border-midnight text-lg">
                Main
              </p>
              <ul className="flex flex-col gap-1 justify-center">
                <li className="border-b border-midnight">
                  <a href="#" className="flex items-center gap-2">
                    <img className="w-6 h-6" src={home} alt="home-icon"></img>
                    Home
                  </a>
                </li>
                <li className="border-b border-midnight flex items-center gap-2">
                  <img className="w-6 h-6" src={cv} alt="cv-icon"></img>
                  CV
                </li>
                <li className="border-b border-midnight flex items-center gap-2">
                  <img className="w-6 h-6" src={about} alt="about-icon"></img>
                  About
                </li>
              </ul>
            </section>
            <section className="aero-gradient-dark text-white p-1 rounded-sm">
              <p className="aero-gradient p-2 border-b border-midnight text-lg flex items-center gap-2">
                <img src={folder} alt="folder-icon" className="w-6 h-6"></img>
                Projects
              </p>
              <ul className="flex flex-col gap-1 justify-center">
                <li className="border-b border-midnight">Project 1</li>
                <li className="border-b border-midnight">Project 2</li>
                <li className="border-b border-midnight">Project 3</li>
              </ul>
            </section>
            <section className="aero-gradient-dark text-white p-1 rounded-sm">
              <p className="aero-gradient p-2 border-b border-midnight text-lg flex items-center gap-2">
                <img
                  className="w-6
                h-6"
                  src={games}
                  alt="games-icon"
                ></img>
                Games
              </p>
              <ul className="flex flex-col gap-1 justify-center">
                <li className="border-b border-midnight">Snake</li>
                <li className="border-b border-midnight">Tetris</li>
                <li className="border-b border-midnight">Wordle</li>
              </ul>
            </section>
            <section className="aero-gradient-dark text-white p-1 rounded-sm">
              <p className="aero-gradient p-2 border-b border-midnight text-lg flex items-center gap-2">
                <img src={disc} alt="disc-icon" className="w-6 h-6"></img>
                Multimedia
              </p>
              <ul className="flex flex-col gap-1 justify-center">
                <li className="border-b border-midnight">Podcasts</li>
                <li className="border-b border-midnight">Photos</li>
              </ul>
            </section>
          </aside>
          <section className="col-span-4 flex flex-col px-8 pt-4 gap-4 overflow-y-auto">
            <article className="aero-gradient-glass rounded-lg p-4 flex flex-col border-midnight-light border">
              <section className="aero-gradient-dark p-2 rounded-lg border-midnight border prose-sm text-white flex flex-col items-center">
                <h6 className="aero-gradient text-white p-2 border border-midnight rounded-lg w-full items-center flex justify-center">
                  Who am I?
                </h6>
                <p>
                  Hi, my name is Gabriel Kaszewski, and I am a Bioinformatics
                  student 🧬 and self-taught full-stack developer 💻.{' '}
                </p>
                <p>
                  My journey with programming started when I was 11 🚀. I love
                  solving problems and creating software that resolves them 👨‍💻.
                </p>
                <p>
                  Currently, I am working as a Python Developer at
                  digimonkeys.com. In my free time I like to read about new
                  technologies and work on my projects 📚.
                </p>
              </section>
            </article>
            <article className="aero-gradient-glass rounded-lg p-4 flex flex-col border-midnight-light border w-full">
              <section className="aero-gradient-dark p-2 rounded-lg border-midnight border prose-sm prose-p:m-1 w-full text-white flex flex-col items-center">
                <h6 className="aero-gradient text-white p-2 border border-midnight rounded-lg w-full items-center flex justify-center">
                  My awesome skills
                </h6>
                <p>
                  Below you can find a list of technologies I have experience
                  with:
                </p>
                <ul className="flex flex-wrap gap-1 list-none">
                  <li>Angular</li>
                  <li>Azure pipelines</li>
                  <li>C#</li>
                  <li>C++</li>
                  <li>Django</li>
                  <li>Docker</li>
                  <li>FastAPI</li>
                  <li>Git</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Linux</li>
                  <li>PostGIS</li>
                  <li>PostgreSQL</li>
                  <li>Python</li>
                  <li>Qt</li>
                  <li>React</li>
                  <li>Rust</li>
                  <li>SCSS</li>
                  <li>TailwindCSS</li>
                  <li>Typescript</li>
                  <li>Unity</li>
                </ul>
              </section>
            </article>
            <article className="aero-gradient-glass rounded-lg p-4 flex flex-col border-midnight-light border w-full">
              <section className="aero-gradient-dark p-2 rounded-lg border-midnight border prose-sm prose-p:m-1 w-full text-white flex flex-col items-center">
                <h6 className="aero-gradient text-white p-2 border border-midnight rounded-lg w-full items-center flex justify-center">
                  Work experience
                </h6>

                <section>
                  <h6 className="text-white p-2 w-full items-center flex justify-center">
                    Python Developer
                  </h6>
                  <p className="border-midnight border-b p-2">
                    choreograph (2025 - currently)
                  </p>
                </section>
                <section>
                  <h6 className="text-white p-2 w-full items-center flex justify-center">
                    Frontend Developer
                  </h6>
                  <p className="border-midnight border-b p-2">
                    choreograph (2024 - 2025)
                  </p>
                </section>
                <section>
                  <h6 className="text-white p-2 w-full items-center flex justify-center">
                    Frontend Developer
                  </h6>
                  <p className="border-midnight border-b p-2">
                    wavemaker (2023 - 2024)
                  </p>
                </section>
                <section>
                  <h6 className="text-white p-2 w-full items-center flex justify-center">
                    Frontend Developer
                  </h6>
                  <p className="border-midnight border-b p-2">
                    GIAP (2022 - 2023)
                  </p>
                </section>
                <section>
                  <h6 className="text-white p-2 w-full items-center flex justify-center">
                    Python Developer
                  </h6>
                  <p className="border-midnight border-b p-2">
                    GIAP (2021 - 2023)
                  </p>
                </section>
                <section>
                  <h6 className="text-white p-2 w-full items-center flex justify-center">
                    Python Developer
                  </h6>
                  <p className="border-midnight border-b p-2">
                    digimonkeys (2021 - currently)
                  </p>
                </section>
                <section>
                  <h6 className="text-white p-2 w-full items-center flex justify-center">
                    Unity Developer
                  </h6>
                  <p className="border-midnight border-b p-2">
                    Mobil Titans (2019 - 2020)
                  </p>
                </section>
              </section>
            </article>
            <span className="flex-1"></span>
            <footer className="text-white gap-2 flex justify-center items-center p-8 rounded-t-lg aero-gradient">
              <p>Powered by loco.rs & Rust 🦀</p>
              <p>Made with 💗 in Poland</p>
            </footer>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
