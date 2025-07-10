export const Cloud = (
  {
    cloudImg,
    top = "10%",
    left = "10%",
    width = 120,
    opacity = 0.8,
    zIndex = 0 // Lower z-index to place behind content
  }
) => (
  <img
    src={cloudImg}
    alt="cloud"
    style={{
      position: "fixed",
      top,
      left,
      width: `${width}px`,
      opacity,
      pointerEvents: "none",
      userSelect: "none",
      zIndex,
    }}
    draggable={false}
  />
);