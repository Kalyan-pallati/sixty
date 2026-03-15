export default function GetInTouch() {
  return (
    <section>
      <div className="min-h-[90vh] flex md:flex-row flex-col pb-12">

        <div className="bg-red-700 md:w-1/2 flex flex-col items-start justify-center text-white px-10 py-20 gap-6 ">
          <h1 className="font-pixel text-6xl">Get In Touch</h1>
          <h2 className="text-3xl">We'd love to hear from you!</h2>
          <p className="text-start max-w-96">
            If you have any questions or would like to get in touch with us,
            please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form className="flex flex-col gap-4 p-10">

            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  required
                  className="border border-black rounded-sm px-3 py-2"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastName"
                  required
                  className="border border-black rounded-sm px-3 py-2"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-black rounded-sm px-3 py-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="border border-black rounded-sm px-3 py-2 h-32"
              />
            </div>

            <div className="flex justify-end ">
              <button
                type="submit"
                className="border border-black rounded-sm min-w-28 p-2 bg-[#F7F4EA] "
              >
                Send
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}