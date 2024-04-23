export const truncatePlot = (plot) => {
  if (plot && plot.length > 600) {
    return plot.substring(0, 600) + "...";
  } else {
    return plot;
  }
};
