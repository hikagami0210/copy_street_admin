// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

const createData = (
    name: string,
    userName: string,
    userId: number,
    organization: string,
    certification: number
) => {
    return { name, userName, userId, organization, certification };
};

const rows = [
    createData("しんちゃん", "shin", 1, "神戸電子専門学校", 0),
    createData("田川", "tagawa", 2, "神戸電子専門学校", 0),
    createData("HIDE", "hide", 3, "神戸電子専門学校", 1),
    createData("タガグァ", "tagawa11111", 4, "神戸電子専門学校", 0),
    createData("ダイトウ", "ditou", 5, "神戸電子専門学校", 0),
    createData("くわ", "kuwa-chan", 6, "神戸電子専門学校", 1),
];

const TableBasic = () => {
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
                    {rows.map((row) => (
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
                            <TableCell align="center">{row.userName}</TableCell>
                            <TableCell align="center">{row.userId}</TableCell>
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

export default TableBasic;
