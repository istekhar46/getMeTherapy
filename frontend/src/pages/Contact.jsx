const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? Or just want to say hi? We're here to help.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="let us know how we can help you ?"
              className="form_input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="form_label">
              Your Message
            </label>
            <textarea
              rows='5'
              type="text"
              id="message"
              placeholder="Describe your issue or share your ideas"
              className="form_input mt-1"
            />
          </div>
          <button className="btn rounded sm:w-fit" type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
