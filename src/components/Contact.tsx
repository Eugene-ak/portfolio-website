export default function Contact() {
  const inputClass: string = "w-full h-16 px-4 border rounded-xl";

  return (
    <section id="contact-section" className="bg-[#1B1A55] contact-section px-8 md:px-40 py-8 flex flex-col items-center gap-8">
      <h1 className="text-[2.2rem] sm:text-[3rem]">&lt; Contact Me /&gt;</h1>
      {/* <ul>
        <li>amedioreugene@gmail.com</li>
        <li>LinkedIn</li>
        <li>WhatsApp</li>
        <li>Phone: 0542917431 / 0269798611</li>
        <li></li>
      </ul> */}

      <form
        action="mailto:amedioreugene@gmail.com"
        method="post"
        target="_self"
        className="w-full text-[#070F2B] flex flex-col items-start justify-evenly gap-6"
      >
        <input type="text" className={inputClass} placeholder="Full name" />
        <input type="text" className={inputClass} placeholder="Email" />
        <textarea
          className="w-full h-48 p-4 border rounded-xl"
          placeholder="Message"
        />
        <button
          type="submit"
          className="w-40 h-12 bg-orange-600 text-white text-lg font-medium rounded-xl mx-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
