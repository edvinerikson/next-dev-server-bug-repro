const realFetch = globalThis.fetch;

globalThis.fetch = function patchedFetch(uri, options) {
  console.log("executing fetch");
  return realFetch(uri, options);
};
