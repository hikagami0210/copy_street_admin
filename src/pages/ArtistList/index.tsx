import { useRecoilState } from "recoil";
import { Artist } from "src/Model/model";
import { artistListAtom } from "src/Atoms/ArtistPageAtom";
import { Table, TableRow } from "mdi-material-ui";
import {
    TableContainer,
    Paper,
    TableHead,
    TableCell,
    TableBody,
} from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { fetchArtistList } from "src/api/api";

const AccountSettings = () => {
    const [artistList, setArtistList] =
        useRecoilState<Artist[]>(artistListAtom);

    const [input, setInput] = useState<string | null>(null);

    useLayoutEffect(() => {
        const ArtistList = async () => {
            const artistList = await fetchArtistList({ inputText: input });
            setArtistList(artistList);
        };
        ArtistList();
    });

    return (
        <TableContainer
            component={Paper}
            sx={{
                paddingRight: "40px",
                paddingLeft: "40px",
            }}
        >
            <Table
                sx={{ minWidth: 650, alignItems: "center" }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">UserName</TableCell>
                        <TableCell align="center">UserId</TableCell>
                        <TableCell align="center">Organization</TableCell>
                        <TableCell align="center">Certification</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {artistList.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-of-type td, &:last-of-type th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.username}</TableCell>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center">
                                {row.organization}
                            </TableCell>
                            <TableCell align="center">
                                {row.certification}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AccountSettings;
