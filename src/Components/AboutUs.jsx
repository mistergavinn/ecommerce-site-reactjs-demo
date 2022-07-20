import React from 'react';
import Title from './UI-Elements/Title';

const AboutUs = () => {
    const title = "About us";
    const about =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam voluptatibus totam aspernatur quos ipsam dicta sequi, nobis, laudantium blanditiis a repellendus iure deserunt vero. Quo molestias ducimus iste nihil cumque enim consectetur dolor, vitae, eveniet porro nemo similique corporis ullam quas amet reprehenderit. Eligendi ad doloremque officia quis quia?";

  const passage = (
    <p>
      Whether running is your recreation or your religion, Adharanand Finn’s incredible journey to the elite training camps of Kenya will captivate and inspire you, as he ventures to uncover the secrets of the fastest people on earth. 
      <br />
      Finn’s mesmerizing quest combines a fresh look at barefoot running, practical advice on the sport, and the fulfillment of a lifelong dream: to run with his heroes. Uprooting his family of five, Finn traveled to a small, chaotic town in the Rift Valley province of Kenya—a mecca for long-distance runners, thanks to its high altitude, endless paths, and some of the top training schools in the world.
      There Finn would run side by side with Olympic champions, young hopefuls, and barefoot schoolchildren, and meet a cast of unforgettable characters. Amid the daily challenges of training and of raising a family abroad, Finn would learn invaluable lessons about running—and about life.
    </p>
  );

  return (
    <>
      <Title title={title} paragraph={about} />

      <section>
        {passage}
      </section>
    </>
  );
};

export default AboutUs;