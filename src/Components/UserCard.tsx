import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

type UserCardProps = {
  user: any[];
  onDelete: (id: number) => void;
};

const UserCard = ({ user, onDelete }: UserCardProps) => {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      valueFormatter: (value) => `₹${value}`,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <>
        <div className="id-btn">
          <button
            onClick={() => navigate(`/edit-user/${params.row.id}`)}
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(params.row.id)}
          >
            Delete
          </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <div style={{ width: "900px", height: 400 }}>
      <DataGrid
        rows={user}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  );
};

export default UserCard;