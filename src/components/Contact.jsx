import React from 'react'
import { toast } from 'react-toastify';



const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0c121573-ba9f-43a4-9788-2c0aa7327bb6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        toast.success("Thanks — your enquiry has been sent.");
        event.target.reset();
      } else {
        toast.error(data.message || "We could not send your enquiry.");
      }
    } catch {
      toast.error("We could not send your enquiry. Please try again.");
    } finally {
      setResult("");
    }
  };

  return (
    <div
      className='container mx-auto px-6 py-24 md:px-12 lg:px-20 w-full overflow-hidden'
      id='Contact'
    >
      <div className='grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20'>
      <div className='text-left'>
      <p className='section-kicker mb-4'>Start a conversation</p>
      <h2 className='font-display text-4xl sm:text-5xl'>A good move starts with a good conversation.</h2>
      <p className='mt-5 max-w-md leading-7 text-slate-500'>Tell us what you’re looking for. One of our property advisors will be in touch within one business day.</p>
      <div className='mt-10 space-y-4 text-slate-600'>
        <p><span className='mr-3 text-[#bd7b46]'>✦</span>Personalised property shortlist</p>
        <p><span className='mr-3 text-[#bd7b46]'>✦</span>Private viewings at your pace</p>
        <p><span className='mr-3 text-[#bd7b46]'>✦</span>Clear guidance from offer to keys</p>
      </div></div>

      <form onSubmit={onSubmit} className='bg-[#18324a] p-7 text-left text-white sm:p-10'>
        <div className='flex flex-wrap gap-y-5'>
          <label className='w-full md:w-1/2 md:pr-3 text-sm'>Your name
            <input className='mt-2 w-full border-b border-white/30 bg-transparent py-3 text-white outline-none placeholder:text-white/45 focus:border-[#e7c7a5]' type='text' name='Name' placeholder='Jane Smith' required/>
          </label>
          <label className='w-full md:w-1/2 md:pl-3 text-sm'>Email address
            <input className='mt-2 w-full border-b border-white/30 bg-transparent py-3 text-white outline-none placeholder:text-white/45 focus:border-[#e7c7a5]' type='email' name='Email' placeholder='jane@email.com' required/>
          </label>
          <label className='my-3 w-full text-sm'>How can we help?
          <textarea className='mt-2 h-32 w-full resize-none border-b border-white/30 bg-transparent py-3 text-white outline-none placeholder:text-white/45 focus:border-[#e7c7a5]'
          name="Message" placeholder = "Tell us a little about the home you have in mind" required></textarea>
          </label>
          <button disabled={Boolean(result)} className='rounded-full bg-[#e7c7a5] px-7 py-3 font-semibold text-[#18324a] transition hover:bg-white disabled:cursor-not-allowed'> {result || "Send enquiry"} <span aria-hidden='true'>→</span></button>
        </div>
      </form>
      </div>


    </div>
  );
}

export default Contact
