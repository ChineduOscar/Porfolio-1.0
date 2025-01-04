const About = () => {
    return (
      <section className="flex flex-col gap-8 px-6 py-3 md:px-16 md:py-6 lg:px-[90px] text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#85d2e6]">
          About Me
        </h2>
        <p className="text-sm md:text-xl leading-8 text-gray-300">
          I&apos;m <span className="text-[#85d2e6]">Oscar</span>, a passionate web developer dedicated to building innovative and user-friendly digital solutions. 
          With over <span className="text-[#85d2e6]">3 years of experience</span>, I specialize in crafting clean, functional, and responsive web applications 
          that leave a lasting impression. My expertise lies in creating seamless UI/UX designs while ensuring robust backend functionality.
        </p>
        <p className="text-sm md:text-xl leading-8 text-gray-300">
          Collaboration is at the heart of everything I do. I enjoy working in dynamic teams where ideas flow freely, and solutions come to life. 
          My leadership skills help me guide projects toward success while fostering a positive and productive work environment. 
        </p>
        <p className="hidden md:block text-sm md:text-xl leading-8 text-gray-300">
          When I&apos;m not coding, I enjoy exploring new technologies, learning about emerging trends, and taking on personal projects that challenge and inspire me. 
          Let&apos;s connect and create something truly remarkable together!
        </p>
      </section>
    );
  };
  
  export default About;
  