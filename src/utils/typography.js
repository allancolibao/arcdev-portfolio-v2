import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Montserrat", 'sans-serif'],
  bodyFontFamily: ["Montserrat", 'sans-serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900'
      ],
    },
  ],
});

typography.injectStyles();

export default typography;