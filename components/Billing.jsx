import { apple, bill, google, kevin2, kevramos, linkedinlogo, github } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={kevramos} alt="billing" className="w-[75%] h-[100 %] relative z-[5] rounded-3xl" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Me
      </h2>
      <p className={`${styles.paragraph} max-w-[680px] mt-200`}>
        Welcome to my personal portfolio website! Here you can find all the fun projects I've worked on and learn a little more about me.<br></br><br></br>
        
        I am currently pursuing a double major in Computer Science & Business at UBC. My interests lie under full-stack development, finance, and entrepreneurship. Right now - I am learning more about React (like this site), Databases, and Blender! Outside the world of tech, I enjoy watching the NBA (Hawks and Thunder fan) and playing volleyball.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="www.linkedin.com/in/adrian-tang-6160741b1" target="_blank" rel="noopener noreferrer">
          <img src={linkedinlogo} alt="linkedin" className="w-[61.72px] h-[84.10px] object-contain mr-5 cursor-pointer" />
        </a>
        <a href="https://github.com/adriantangg" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="w-[60.34px] h-[86.16px] object-contain cursor-pointer" />
        </a>
        
      </div>
    </div>
  </section>
);

export default Billing;