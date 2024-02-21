import axios from "axios";

export const fetchTableData = async () => {
  try {
    const response = await axios.get(
      "http://192.168.10.12:7000/api/statsSummary/"
    );

    if (response.status === 200) {
      const data = response.data.map((item, index) => ({
        key: index,
        name:
          item.name === "# families"
            ? "Family"
            : item.name === "# Genera"
            ? "Genera"
            : item.name,
        count: item.count,
      }));

      return data;
    }
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
