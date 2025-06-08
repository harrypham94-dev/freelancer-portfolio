export const transitions = {
  hover: {
    transform: "translateY(-4px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  card: {
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  fadeIn: {
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  },
  fadeOut: {
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  slideIn: {
    transform: "translateX(0)",
    transition: "transform 0.3s ease-in-out",
  },
  slideOut: {
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease-in-out",
  },
};

export const animations = {
  fadeInUp: {
    "@keyframes fadeInUp": {
      from: {
        opacity: 0,
        transform: "translateY(20px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },
  fadeInLeft: {
    "@keyframes fadeInLeft": {
      from: {
        opacity: 0,
        transform: "translateX(-20px)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
  fadeInRight: {
    "@keyframes fadeInRight": {
      from: {
        opacity: 0,
        transform: "translateX(20px)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0)",
      },
    },
  },
};
