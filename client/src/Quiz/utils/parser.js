import xml2json from 'node-xml2json';

export default function toJson(xml) {
  return xml2json.parser(xml);
}
