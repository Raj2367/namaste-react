import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setinterval added");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("clear inerval done");
    };
  }, []);
  return (
    <div>
      <h3>Contact Us page</h3>
    </div>
  );
};

export default ContactUs;
