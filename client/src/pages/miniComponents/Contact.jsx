import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const API_URL =
  import.meta.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/v1"
    : "https://backend-smr5.onrender.com/api/v1";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();

    if (!senderName || !senderEmail || !subject || !message) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/message/send`,
        { senderName, subject, message, senderEmail },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setSenderName("");
      setSubject("");
      setMessage("");
      setSenderEmail("");
    } catch (error) {
      const errMsg = error.response?.data?.message || "Failed to send message";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative mb-8">
        <h1
          className="flex gap-4 items-center text-[1.85rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{ background: "hsl(222.2 84% 4.9%)" }}
        >
          <span className="text-slate-300">CONTACT</span>
          <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span
          className="absolute w-full h-1 top-7 sm:top-7 
        md:top-8 lg:top-11 z-[-1] bg-slate-200"
        ></span>
      </div>
      <form onSubmit={handleMessage} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 px-1.5">
          <Label className="text-xl">Your Name</Label>
          <Input
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col gap-2 px-1.5">
          <Label className="text-xl">Email</Label>
          <Input
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col gap-2 px-1.5">
          <Label className="text-xl">Subject</Label>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col gap-2 px-1.5">
          <Label className="text-xl">Message</Label>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          />
        </div>
        <div className="flex justify-end">
          <Button className="w-full sm:w-52" disabled={loading}>
            {loading ? "Sending..." : "SEND MESSAGE"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
