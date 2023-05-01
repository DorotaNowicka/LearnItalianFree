import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://127.0.0.1:9000/api"
});

apiClient.get("/listenings").then(response => {
  if (!response.ok) {
  }
});
