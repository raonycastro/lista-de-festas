import { useHistory } from "react-router-dom";

const History = (url: string) => useHistory().push(url);

export default History;