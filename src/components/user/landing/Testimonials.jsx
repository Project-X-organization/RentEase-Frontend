import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mary",
      role: "Teacher",
      message: "Finding my new home was so easy! The process was smooth, and I moved in without any hassle.",
      avatar: "/Avatar.png",
    },
    {
      name: "John",
      role: "Engineer",
      message: "This platform helped me find the perfect apartment at an affordable price. Highly recommend!",
      avatar: "/Avatar.png",
    },
    {
      name: "Sarah",
      role: "Doctor",
      message: "I got my apartment easily it was such a pleasant experiences so easy! The process was smooth, and easy",
      avatar: "/Avatar.png",
    },
  ];

  return (
    <section className="lg:py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-center pt-8">Testimonials</h2>
      <div className="flex flex-col my-4 lg:flex-row justify-center lg:space-x-6 mt-8 mx-auto w-[85%] ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 lg:w-80 lg:text-lg my-4 hover:scale-105 hover:font-bold">
            <p className="text-gray-600 italic">"{testimonial.message}"</p>
            <div className="flex mt-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="lg:text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
