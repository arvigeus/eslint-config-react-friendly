const macros = {
  paths: [
    {
      name: "@emotion/styled",
      message: "Prefer using @emotion/styled/macro"
    },
    {
      name: "@lingui",
      message: "Prefer using @lingui/macro"
    },
    {
      name: "babel-plugin-trace",
      message: "Prefer using babel-plugin-trace/macro"
    },
    {
      name: "styled-components",
      message: "Prefer using styled-components/macro"
    },
    {
      name: "styled-jsx",
      message: "Prefer using styled-jsx/macro"
    }
  ],
  patterns: [
    "!@emotion/styled/macro",
    "!@lingui/macro",
    "!babel-plugin-trace/macro",
    "!styled-components/macro",
    "!styled-jsx/macro"
  ]
};

module.exports = macros;
