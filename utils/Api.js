import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const getData = async (link) => {
  const { data } = await axios.get(link, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "d8bc727335msh0e6e182209b3d5ap10b3e3jsn392c3356aa2f",
    },
  });

  return data;
};
