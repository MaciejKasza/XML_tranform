export const getXmlStructure = (file) => {
  if (file) {
    let nnode = file;
    let structure = [];
    while (nnode.children[0]) {
      structure.push(nnode.name);
      nnode = nnode.children[0];
    }

    console.log("getXmlStructure: ", structure.join("/"));
    return structure.join("/");
  }
};
