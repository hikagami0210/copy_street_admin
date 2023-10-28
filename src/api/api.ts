import axios from "axios";
import { API_BASE_URL } from "src/Config/config";

export const fetchArtistList = async ({
    inputText,
}: {
    inputText: string | null;
}) => {
    const searchKeyword = inputText !== null ? `?keyword=${inputText}` : "";
    const url = API_BASE_URL + `/artistsShow` + searchKeyword;
    console.log(url);

    return await axios
        .get(url)
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            throw e;
        });
};
