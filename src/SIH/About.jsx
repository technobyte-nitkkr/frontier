import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { fadeIn, textVariant } from "./utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full md:w-[250px] lg:w-1/4'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-24 h-24 object-contain rounded-full'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const themes = [
    {
      title: "Clean & Green Technology",
      icon: "data:image/png;base64,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"  // Provide the image URL here
    },
    {
      title: "Tourism",
      icon: "data:image/png;base64,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"  // Provide the image URL here
    },
    {
      title: "Renewable / Sustainable Energy",
      icon: "data:image/png;base64,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"  // Provide the image URL here
    },
    {
      title: "Blockchain & Cybersecurity",
      icon: "data:image/png;base64,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"  // Provide the image URL here
    },
    {
      title: "Smart Education",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAwBI9eA43xYpzSV37pli3gCSksLz0CHvPE1VFuAjVtdmwwxTDgCcPT69Ag&s"  // Provide the image URL here
    },
    {
      title: "Disaster Management",
      icon: "data:image/jpeg;base64,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"  // Provide the image URL here
    },
    {
      title: "Toys and Games",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAZlBMVEX///8jHyAAAAAgHB2sqqqQjo709PSKiYmAgIAJAALV1NTGxcVlZGSzsrMUDRAxLi4cGBkYExTu7u7k5OS+vr6ioaF6eXmVlJRxcHBRT09APT47ODhfXV3e3t7My8ubmZkqJidHRkbjofMfAAAKJklEQVR4nO1baZOqOhAdEkUDEhJABcTt///JR3cEWbLhOLfqVXG+3LkKoUlvp7vjz8+KFStWrFixYsWKFStWrFix4v+N8LbZjXEv8oVrRJMl7nH2NfmuJScz1JtFa5zT6QLsGX9JvoRwGswgyMF/ifBA5ksIcv+KfBvN2ghy9F6jJLoF6IIVzNgykI/yCdoP6SPyXONINEvAR2yZnehwx3fnj3sywu7RSshKvzXioL1YpsfRCntQDGXJL+XbcFTmc7ZXdwaf37wWeXJQ59QltgTt8Por+Qr1mifNV1X7VJH6LIIGyObmhooX9dJ4NcT1IWCftrrvIsNjZyhACawJ59+ccAlPO9Eha7hRvp+ffatkcXFqKKtke53UReXwwJcFg5kI+IZ7w7d5LWBn9g6AEJQWeuHrVngqfYPBFDdi0o0C2pBkDqCCdUasHtHaODc/wooMdkgGlpul0EfweUg3LrJhFiNyAMIAlXrdvK/wATMnRTRDSj7x5Ah2n53tl2DCsiJwhMsclfyJJ4MHy6fVOsBN6CWJLSietE0jtg1CS+Y2RemB0WsW/cfIGhlQe6DNKhHIysb8QghDvFoqH95mjDDdRYdWQHskzJ+tgI2Vmt5wK5ayhgI8JHUEqBB20H5RXlPHDv78HCDi241pjlR6eD+6oNXPf+LWTRw7qPxkIfHCDTRHrw679t1lVURGFI20hOkOkLHkc0mJAsYVkJ3zOvQkKVIjKOYRF+eLgFySJY4cM7DAkXuGUVzcZg4L5mOLhBim3R6KvMOLur1wam/gIxcumoARVu8nIuYP5kwj1E1Jr8QRzifIyZRjHIiE3RBs6hJ5ydm0XBmC8WYsX3i9xdHM3MDbFqQTqEN4M1j01CddIaamUmzLgxHlbmx/2fEJJfFlP9nVmCypwcI2uI5sFilHW5RJkFDOr7dgfGVUvzRB0ong4O3eZXIBFLh+rx1e4IN0f0eXIFb+YEVEZK+JSeo4gps8PNfZsnGQBtJCA0jLOwhYjfFGB5D8t5pgAv8ZKTQT1NtNsrTlKMHgWuAbKi1nl/ar+tOmD5bY8lKeKij7+WGk/5J5uwkYrKgGd8PCSiNAIWj6aSUrBIjVBqpwi3XKaAuhvqAXL+JaTjSsBDz2AvqtMgcGL65evASfGPkJKCfgPn2GEK3htUthVCRFyUcCPo6FJqe4AZrp0nJCZqn0TDyydrdO509J8+CEYPHeC9juAmG8Pi0WERbuNANkhIzZZgxLPzzse8e7dcJKRa1gLKAKE4wsbftAMBC1+vvMZgV7WAkvxhBiyISYEh4GRZsSJ8RWgymnuFYmPbOJLnReTwBj8OiDRG2IUQ0d1dSTKqUKZdwbolIs5hSyTECkPpTu8mzzkEAAJ0aCfhw4VwHz5WCrIRdgjKXqeHeLFaoD3iD9WFhvR0C/KORiMJw5heZesRqYFlbD2PiQhrIO6YNYmlOGhT55zr6GHWbOfAwNX8xC53kkGAD6Io6K83VhcSCElQWayL5LxlTX8gHXlgdHnYHRVMBfkHfNnooVp6vqg4dWMCKgjDR4bVITJkQbp+4aOcD8HVXsywRRdWdiK4w9d/DIO7fniuqGRXm5NIn2xqwPIBZg1kA7UDaY6Hc8O3nxmmQwwaDEud/vEGwGRkv0pBByOw2aEtAz4KT9z+l0qJAZugw6e4LJsdZtYR8n9OUnb6uw8ScJVrHWJa8p7fPNBuOgUHGQqM/uKg5iY1A6Y5bqkrdJMYcydpQmsk2A87BqqNEMr7J6SQwDjRfVCktrJpHUOWp7vqtrNJ23RecNUc1PTrYDgVLQn9USkJv2saXkXFBtLqaSpW76S94bEsmh9q7P94uS8i0hMj2r4WA+fIf4uLxIgrFrxGYYo9XWg3dg9ar+DCGD9qU5mnAbe9SU6C0RxhDbjBJVOCx9wzyKoz0bCkjTJLpdvWg/NnjUnzk0kS6vzwsMEKS8NzgnercwkPDY+lwZ14XKjxk1mpSK9UDye6pSyc7Sb8Goz4w1jy38X7Vv8HFNsscmI0h4BEG6SjOHUMGUGGD0vLdC7OfZaFyhDb+bjuD85JCM/Ku6K7iYkM+mBqLST+Vg27pQEaWjBud2TmRH0Kc3bO3QdiMy8LIldbGa5Qo1T+kTO0xn5YssXC8jASFU2woT2OF5tziEeCZoUz4Xj9aaPtdR0j8X2oH0oQQs2CjFxIPN1aHWB0rsUwaSY/5Y0sZr0ytlqhnzGLwX5lM0vCt0VQbDmLzdUMtYJ0RT1pjYrs8pkvp38RBRGWA7a/jaZ6xODkm8QZ2IwZIou9ELMwnupdvgvYSc4pc/pgjzaz5eMwwkakTphAwLpcOsoh8CJhay1n9VpozJ6vydwzgxfY8h+SgqII839s8SPm5cDtHmlMgvf/ig6I7iCDLOC/Zkd+devf1vIC8f6vzSJKhBySEu+ntejPYbZ218EG3Ou/PsBFiIxbEpzpy4zUL/DSB/S0OcwfEN/9aJrw9RWWSAFi0Vn55w+BKA25nahDA6/bx/+iUgvTGQakjcYtrS+dfAOGMoxyPhHp3+OWLLzOnm0xv5a0QDLjYFCug1CbhtPkHioxy0s0pvZ0XPnO0IT/MTrV6QHg4IpzBErb9wY7HPIbbOEawB3MMD8RxEoI91OOR0d019zxt9JqEa9utJHdBSd4czQfk+UDAwLGah8y9gvtULOGkrGOTD47Vkt12Kc43nF0qXhHtunEZAzcYcs4UYewHyE8qTXfiUP+uwNVMqrOnsXCFSZ0Y/GxlHKXZ5HITzOB0VvlGZzbN7BBYTxMPTDbebj8T2gELU8BJwXtPancv9lGR7uHCeP7+Za/eHteRr5atQvt8kQ+Vi1pM+ETEWRqAAy1nIsMJydvFBurGEqq9skRAaLYbSUhrK9hfwbAo3ZCFvqPPnloO/WDbp2xfQpDC2sFXHWl5+zcawoSQeRmcMB33ZCYhNQHxzaV7XH0oT5jbooC87/ybghrvUROHxjYoqhITQSmjSBXR5jQJSg4AbRnU/aPhQQjwgxA3cPTSLgVMD7TeY4JafMzUhS0FCpo8lEAflfFYLgD6lNkQV2Ej5YkmvziDpfxSFIx99Lr1jh3ruJX45dBFyHL7ohqkFjOWZ3hdxZM9mmfKK8rHvNpUiqk/LEbQMTUUTcsWZJnPVmfY5crMEMQ7Zpmn5qIzJ5IxXRfbGEir53Ex4KQrNw/bY0LawERxAj9jG9WkLCb9CIvFhbwmjJ1YT1rMz2C2nrGt5h0ckWDz4k3bDXR3MeR3czTYp/tSO2IsC/LVbwMXlsDueq+A1efijhtIOFcZpfdjtqwDPPQpT42h8E1wIhTb+Kb0Pv34mIUz1CVODae6RTO/vg6YB6vvj30R54Dx6GNX8wFCDqOGsG2AJIvZ/2u66Nax7mCQXz2PAYVx2xfZj9wV+ZX9Y0T2sPi4x9WuRJJoT43+CsH3Y9ITKihUrVqxYsWLFihUrVqxYsQLwHx6gjmoSzS0ZAAAAAElFTkSuQmCC"  // Provide the image URL here
    },
    {
      title: "Miscellaneous",
      icon: "data:image/png;base64,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"
    },
    {
      title: "Space Technology",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXOuM4meFjPD96FVmmO9GsuiXzZGnm3kR4g&s"  // Provide the image URL here
    }
  ];

  return (
    <>
      <div className="mt-12 mx-auto">
        <motion.div variants={textVariant()} className="flex justify-center">
          <h2
            className={`${styles.sectionHeadText} text-5xl font-extrabold text-white inline-block py-3 px-6 rounded-lg shadow-lg`}
          >
            Themes
          </h2>
        </motion.div>

        <div className="mt-20 flex lg:flex-row flex-wrap justify-center gap-10">
          {themes.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}  // Pass the URL to the component
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default About;