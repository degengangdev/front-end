module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "11px": "11px",
        "246px": "246px",
      },
      colors: {
        purpleBrand: "#F12C92",
        yellowBrand: "#ffff00",
        magenta: "#ff00ff",
        skyBlue: "#00ffff",
      },
      boxShadow: {
          btn: "2px 2px #EBF759",
      },
      fontSize: {
        54: "54px",
        33: "33px",
        28: "28px",
        41: "41px",
      },
      height: {
        "62rem": "62rem",
        "30rem": "30rem",
        },
      fontFamily: {
          rob: ["roboto", "plateia"],
          robmono: ["robotomono", "roboto", "plateia"],
          wraith: ["wraith", "plateia"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
