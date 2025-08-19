import { Link } from "react-router";

const Pawel = () => {
  return (
    <div className="min-h-screen font-[Futura]">
      <header className="flex justify-between items-center my-16 mx-16 font-bold text-2xl">
        <div>Pawel.dev</div>
        <nav>
          <ul className="flex w-2xl justify-between">
            <li>
              <Link to="#main">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main
        id="main"
        className="font-bold mt-64 mx-16 flex items-center justify-between"
      >
        <div className="h-full w-1/2 flex flex-col items-start">
          <h1 className="text-5xl mb-4">Front-End Developer 👋</h1>
          <p className="text-2xl text-neutral-500">
            Hi, I am Pawel Szoltysek. A passionate Front -end Developer based in
            Erkelenz, Germany 🇩🇪
          </p>
          <div className="flex mt-4">
            <Link to="https://www.linkedin.com/in/pawel-szoltysek-0b7890299/">
              <a
                href="https://www.linkedin.com/in/pawel-szoltysek-0b7890299/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="linkedin.png" className=" w-10 h-10" alt="linkedin" />
              </a>
            </Link>
            <Link to="https://github.com/PawelSzoltysek93">
              <a
                href="https://github.com/PawelSzoltysek93"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="github-sign.png"
                  className="w-10 h-10 ml-4"
                  alt="github"
                />
              </a>
            </Link>
          </div>
          <div className="text-2xl ">Tech Stack</div>
        </div>

        <div className=" relative  w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-black [animation:morph_8s_ease-in-out_infinite]" />
          <div className="absolute inset-[4px] overflow-hidden [animation:morph_8s_ease-in-out_infinite]">
            <img
              src="Injectie.png"
              alt="selfie"
              className="h-[600px] object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pawel;
