import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          About <span className="text-primary">SPHERE</span>
        </h1>
      </div>
      <p className="mt-16 text-lg leading-8 max-w-2xl mx-auto">
        Sphere Inventory, where efficiency meets precision in managing your
        inventory needs. At Sphere Inventory, we understand the critical role
        that streamlined inventory management plays in the success of
        businesses, big and small.
        <br />
        <br />
        <br />
        Our platform is designed to empower businesses with a comprehensive and
        user-friendly solution for tracking, organizing, and optimizing their
        inventory. Whether you're a budding entrepreneur or an established
        enterprise, Sphere Inventory is here to simplify your inventory
        processes, saving you time, reducing errors, and boosting overall
        productivity.
      </p>
    </>
  );
};

export default About;
