//addition column control
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "partnerChoice", headerName: "Partner choice", width: 130 },
  {
    field: "skill",
    headerName: "Skill",
    type: "number",
    width: 60,
    renderCell: (params) => {
      return (
        <div className={`cellWithSkill ${params.row.skill}`}>
          {params.row.skill}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    name: "Snow",
    partnerChoice: "Laramie",
    skill: 3,
  },
  {
    id: 2,
    name: "Jamie Lannister",
    partnerChoice: "Stark",
    skill: 3,
  },
  {
    id: 3,
    name: "Lannister",
    partnerChoice: "Laramie",
    skill: 4,
  },
  {
    id: 4,
    name: "Stark",
    partnerChoice: "Laramie",
    skill: 2,
  },
  {
    id: 5,
    name: "Targaryen",
    partnerChoice: "Alex",
    skill: 1,
  },
  {
    id: 6,
    name: "Melisandre",
    partnerChoice: "Timmy",
    skill: 2,
  },
  {
    id: 7,
    name: "Clifford",
  },
  {
    id: 8,
    name: "Frances",
  },
  {
    id: 9,
    name: "Roxie",
  },
  {
    id: 10,
    name: "Roxie",
  },
];
