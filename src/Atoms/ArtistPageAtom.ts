import { atom } from "recoil";
import { Artist } from "src/Model/model";

export const artistListAtom = atom({
    key: "artistListAtom",
    default: [] as Artist[],
});
