const requireAll = (r) => r.keys().forEach(r);
const requireContext = require.context('@/assets/img/', true, /\.svg$/);
requireAll(requireContext);