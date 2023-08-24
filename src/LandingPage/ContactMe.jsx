import { Button, Card, Col, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useRef, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 800,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ldwdkuv",
        "template_hovmv0c",
        form.current,
        "gj1h9Nag_oDz9NbfM"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact-me"
      className="  bg-about h-screen mt-10 pl-5 pr-5 md:mt-16 flex items-center justify-center h-full bg-"
      data-aos="fade"
    >
      <Card
        className=" bg-slate-400 border:none w-full md:w-1/2 p-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form ref={form} onSubmit={sendMail}>
          <h1 className="text-black text-3xl md:text-4xl font-bold font-[poppins-800] text-center mb-5">
            Contact
          </h1>

          <Row className="w-full">
            <Col xs={24} className="mb-5">
              <label htmlFor="name" className="text-black font-medium">
                Your Name
              </label>
              <Input className="py-2 mt-2 border rounded-lg" name="to_name" required />
            </Col>
            <Col xs={24} className="mb-5">
              <label htmlFor="email" className="text-black font-medium">
                Your Email
              </label>
              <Input type="email" name="from_name" className="py-2 mt-2 border rounded-lg" />
            </Col>
            <Col xs={24} className="mb-5">
              <label htmlFor="message" className="text-black font-medium">
                Message
              </label>
              <TextArea name="message" rows={6} className="mt-2 border rounded-lg" />
            </Col>
            <Col xs={24}>
              <Button
                type="primary"
                icon={<SendOutlined />}
                className="bg-[#212233] flex items-center justify-center py-3 w-full rounded-lg text-white"
                block
                htmlType="submit"
                loading={loading}
              >
                Send
              </Button>
            </Col>
          </Row>
        </form>
      </Card>
    </div>
  );
};

export default ContactMe;
