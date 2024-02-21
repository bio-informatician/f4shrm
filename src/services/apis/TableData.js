import http from "../http-service";

export async function getAllData() {
  const { data } = await http.get(`http://192.168.10.12:7000/result`, {
    headers: {
        'content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': true,
        'X-Atlassian-Token': 'nocheck',
    },
  });

  return data;
}

export default {
  getAllData,
};
