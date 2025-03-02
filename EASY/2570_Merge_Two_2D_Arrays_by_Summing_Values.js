var mergeArrays = function (nums1, nums2) {
  let map = new Map();

  // Insert elements from nums1
  for (let [key, value] of nums1) {
    map.set(key, (map.get(key) || 0) + value);
  }

  // Insert elements from nums2
  for (let [key, value] of nums2) {
    map.set(key, (map.get(key) || 0) + value);
  }

  // Convert the map back to a sorted 2D array
  return [...map.entries()].sort((a, b) => a[0] - b[0]);
};
