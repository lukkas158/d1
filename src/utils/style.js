import {
  Table,
  Bed,
  Check,
  PaperPlane,
  Pen,
  PlayCircle,
} from "../components/icons";

export const color = {
  textDarkest: "#3E4157",
  textDark: "#9196AB",

  backgroundDarkPrimary: "#1A1731",
  backgroundMedium: "#EBEEF6",
  backgroundLight: "#FAFBFF",
  backgroundLightest: "#FFFFFF",

  borderLightest: "#CCCFDE",
};

export const font = {
  regular: 'font-family: "Gotham Book"; font-weight: normal;',
  bold: 'font-family: "Gotham Bold"; font-weight: bold;',
  size: (size) => `font-size: ${size}px;`,
};

export const jorneyTypeStyle = {
  0: {
    icon: Table,
    color: "#D190DD",
  },
  1: {
    icon: PaperPlane,
    color: "#C1CA4F",
  },

  2: {
    icon: PlayCircle,
    color: "#35C667",
  },

  3: {
    icon: Pen,
    color: "#3FA8F4",
  },

  4: {
    icon: Bed,
    color: "#EBBD3E",
  },

  5: {
    icon: Check,
    color: "#9FABD5",
  },
};
