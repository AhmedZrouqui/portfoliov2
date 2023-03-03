import React, { SyntheticEvent, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { Helmet } from "react-helmet";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const handleSendEmail = (e: SyntheticEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID as string,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.REACT_APP_EMAIL_USER_ID as string
      )
      .then((result: EmailJSResponseStatus) => {
        alert("Email has been sent, thank you!");
        form.current?.reset();
      })
      .catch((rejected: any) =>
        alert("An error has occurred, please try again!")
      );
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ahmed Zrouqui - Contact me</title>
        <meta
          name="description"
          content="Contact page - Come say Hi, let's build something cool!"
        />
        <meta name="title" content="Ahmed Zrouqui - Contact" />
        <meta name="og:title" content="Ahmed Zrouqui - Contact" />
        <meta
          name="og:description"
          content="Contact page - Come say Hi, let's build something cool!"
        />
        <meta name="og:link" content="https://ahmedzrouqui.com/contact" />
      </Helmet>
      <div className="title mb-16">
        <h1 className="font-magilio text-6xl text-blackish">
          Glad you came to say Hi 😁!
        </h1>
      </div>
      <form ref={form} onSubmit={handleSendEmail}>
        <div className="input mb-4">
          <label htmlFor="form_email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            placeholder="Type your email..."
            className="bg-transparent border-primary border-2 rounded p-2 w-full"
            name="form_email"
          />
        </div>
        <div className="input mb-4">
          <label htmlFor="form_fullName" className="text-lg">
            Full name
          </label>
          <input
            type="text"
            placeholder="Type your name..."
            className="bg-transparent border-primary border-2 rounded p-2 w-full"
            name="form_fullName"
          />
        </div>
        <div className="input mb-4">
          <label htmlFor="form_subject" className="text-lg">
            Subject
          </label>
          <input
            type="text"
            placeholder="Type a subject..."
            className="bg-transparent border-primary border-2 rounded p-2 w-full"
            name="form_subject"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg" htmlFor="form_message">
            Message
          </label>
          <textarea
            placeholder="Type a message..."
            className="bg-transparent border-primary border-2 rounded p-2 w-full"
            rows={5}
            name="form_message"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary text-white text-lg py-2 px-4 cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
