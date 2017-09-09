import glamorous from "glamorous";

const A = glamorous.a({
  color: "#FFD800",
  textDecoration: "none",
  transition: "all 3s",
  minWidth: 350,
  lineHeight: "45px",
  display: "inline-block",
  ":hover": {
    color: "white",
    letterSpacing: 1.5
  }
});

export default A;
