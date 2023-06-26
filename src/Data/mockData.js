import { tokens } from "../theme";

export const mockBarData = [
  {
    region: "AD",
    "zones": 137,
    "zonescolor": "hsl(229, 70%, 50%)",
    fertlizer: 96,
    fertlizerColor: "hsl(296, 70%, 50%)",
    urea: 72,
    ureaColor: "hsl(97, 70%, 50%)",
    dap: 140,
    dapColor: "hsl(340, 70%, 50%)",
  },
  {
    region: "AE",
    "zones": 55,
    "zonescolor": "hsl(307, 70%, 50%)",
    fertlizer: 28,
    fertlizerColor: "hsl(111, 70%, 50%)",
    urea: 58,
    ureaColor: "hsl(273, 70%, 50%)",
    dap: 29,
    dapColor: "hsl(275, 70%, 50%)",
  },
  {
    region: "AF",
    "zones": 109,
    "zonescolor": "hsl(72, 70%, 50%)",
    fertlizer: 23,
    fertlizerColor: "hsl(96, 70%, 50%)",
    urea: 34,
    ureaColor: "hsl(106, 70%, 50%)",
    dap: 152,
    dapColor: "hsl(256, 70%, 50%)",
  },
  {
    region: "AG",
    "zones": 133,
    "zonescolor": "hsl(257, 70%, 50%)",
    fertlizer: 52,
    fertlizerColor: "hsl(326, 70%, 50%)",
    urea: 43,
    ureaColor: "hsl(110, 70%, 50%)",
    dap: 83,
    dapColor: "hsl(9, 70%, 50%)",
  },
  {
    region: "AI",
    "zones": 81,
    "zonescolor": "hsl(190, 70%, 50%)",
    fertlizer: 80,
    fertlizerColor: "hsl(325, 70%, 50%)",
    urea: 112,
    ureaColor: "hsl(54, 70%, 50%)",
    dap: 35,
    dapColor: "hsl(285, 70%, 50%)",
  },
  {
    region: "AL",
    "zones": 66,
    "zonescolor": "hsl(208, 70%, 50%)",
    fertlizer: 111,
    fertlizerColor: "hsl(334, 70%, 50%)",
    urea: 167,
    ureaColor: "hsl(182, 70%, 50%)",
    dap: 18,
    dapColor: "hsl(76, 70%, 50%)",
  },
  {
    region: "AM",
    "zones": 80,
    "zonescolor": "hsl(87, 70%, 50%)",
    fertlizer: 47,
    fertlizerColor: "hsl(141, 70%, 50%)",
    urea: 158,
    ureaColor: "hsl(224, 70%, 50%)",
    dap: 49,
    dapColor: "hsl(274, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Oromiya",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "urea",
        y: 101,
      },
      {
        x: "dump",
        y: 75,
      },
      {
        x: "sodium",
        y: 36,
      },
      {
        x: "sulfer",
        y: 216,
      },
      {
        x: "phosphate",
        y: 35,
      },
      {
        x: "better seed",
        y: 236,
      },
     
    ],
  },
  {
    id: "Amhara",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "urea",
        y: 212,
      },
      {
        x: "dump",
        y: 190,
      },
      {
        x: "sodium",
        y: 270,
      },
      {
        x: "sulfer",
        y: 9,
      },
      {
        x: "phosphate",
        y: 75,
      },
      {
        x: "better seed",
        y: 175,
      },
   
     
    ],
  },
  {
    id: "Gambella",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "urea",
        y: 191,
      },
      {
        x: "dap",
        y: 136,
      },
      {
        x: "sodium",
        y: 91,
      },
      {
        x: "sulfer",
        y: 190,
      },
      {
        x: "phosphate",
        y: 211,
      },
      {
        x: "better seed",
        y: 152,
      },
     
    ],
  },
];
