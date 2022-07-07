export const getXmlStructure = (file) => {
  if (file) {
    let node = file;
    let structure = [];
    while (node.children[node.children.length - 1]) {
      structure.push(node.name);
      node = node.children[node.children.length - 1];
    }

    console.log("getXmlStructure: ", structure.join("/"));

    console.log(getXmlFields(file, structure));
    return structure;
  }
};

export const getXmlFields = (file, structure) => {
  const result = [];
  if (!file) return [];
  let node = file;
  while (true) {
    node = node.children[node.children.length - 1];
    if (node?.name === structure[structure.length - 1]) break;
  }
  node.children.map((child) => result.push(child.name));
  return result;
  console.log("getXmlFields", node);
};
