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
        "2xs": "0.65rem"
      },
      height: {
        "62rem": "62rem",
        "30rem": "30rem",
        "238px": "238px",
        "220px": "220px",
        "227px": "227px",
        "233px": "233px",
        "800px": "800px",
        "1024px": "1024px"
          },
      width: {
        "20rem": "20rem",
        "30rem": "30rem",
        "196px": "196px",
        "209px": "209px",
        "336px": "336px",
        "342px": "342px",
      },
        minWidth: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            "150pct": "200%",
            "200pct": "200%",
            "btn": "6rem",
      },
      margin: {
        "30rem": "30rem",
        "36rem": "36rem",
        "40rem": "40rem",
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
