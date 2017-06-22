const normalizeTime = t => (isFinite(t) ? `${t}ms` : t);

export default normalizeTime;
