import { theme } from "@chakra-ui/react"
import styled from "@emotion/styled"

const THEME = {
  bg: {
    dark: theme.colors.gray[700],
    light: theme.colors.gray[200],
  },
  color: {
    dark: theme.colors.gray[300],
    light: theme.colors.gray[700],
  },
}

const MarkdownView = styled.div<{
  colorMode: "dark" | "light"
  titleFontSize: string
  lineMB: string
}>`
  * {
    color: ${(props) => THEME.color[props.colorMode]};
  }
  hr {
    margin: 16px 0;
  }

  p {
    margin-bottom: ${(props) => props.lineMB};
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 24px 0 8px 0px;
    font-size: 16px !important;
    font-weight: bold !important;
  }

  img {
    max-width: 100%;
    margin: 16px auto;
    padding: 36px 0;
  }
  ul,
  ol {
    margin-bottom: 16px;
    margin-top: 16px;
    margin-left: 32px;
    position: relative;
  }
  .task-list-item {
    list-style: none;
  }
  blockquote {
    color: ${({ colorMode }) => THEME.color[colorMode]};
    position: relative;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? theme.colors.gray[700] : theme.colors.purple[50]};
    border-radius: 5px;
    padding: 4px 0;
    margin: 16px 0;
    width: 98%;
    p {
      font-size: ${theme.fontSizes.sm};
      margin: auto 0;
      padding: 0 !important;
      align-items: center;
      margin-left: 15px;
    }
    ::before {
      content: "";
      background: ${({ colorMode }) =>
        colorMode === "dark"
          ? theme.colors.gray[400]
          : theme.colors.facebook[300]};
      border-radius: 15px;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 5px;
    }
  }
  table {
    color: ${({ colorMode }) => THEME.color[colorMode]};
    position: relative;
    max-width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 36px auto;
    min-width: 80%;
    th {
      background-color: ${({ colorMode }) =>
        colorMode === "dark" ? theme.colors.gray[700] : theme.colors.gray[50]};
    }
    td,
    th {
      padding: 8px 12px;
      word-break: break-all;
      border: 1.8px solid
        ${({ colorMode }) =>
          colorMode === "dark"
            ? theme.colors.gray[600]
            : theme.colors.gray[300]};
    }
  }
  a {
    color: ${theme.colors.blue[500]};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
  pre {
    width: 100%;
    display: block;
    background-color: #eee;
    padding: 8px;
    margin: 16px 0;
  }
  code {
    padding: 2px 4px;
    border-radius: 2px;
    font-size: ${theme.fontSizes.xs};
  }
  .math-display {
    padding: 24px 16px;
  }
`

export default MarkdownView
