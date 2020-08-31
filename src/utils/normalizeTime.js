const normalizeTime = (t) =>
  isFinite(t) && !isNaN(parseFloat(t)) ? `${t}ms` : t;

export default normalizeTime;
