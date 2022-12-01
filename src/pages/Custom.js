import "./Custom.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, IconButton, List, Paper, Typography } from "@mui/material";
import ListItemUser from "../components/ListItemUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddCircle } from "@mui/icons-material";
import AddUserDialog from "../components/AddUserDialog";
import CardBig from "../components/CardBig";
import SingleW from './SingleW';

const BASE_API_URL = `https://reqres.in/api`;

function Custom() {
  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  console.log(users);

  useEffect(() => {
    async function getUsers() {
      await axios
        .get(`${BASE_API_URL}/articles`, {
          params: {
            page: 1
          }
        })
        .then((res) => {
          const responseData = res.data.data;
          setUsers(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    getUsers();
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };



  return (
    <div className="App">
      <div className="list-container">
        <div className="list-title-wrapper">
          <Typography variant="h4">Add Your Quote</Typography>
          <IconButton onClick={openDialog}>
            <AddCircle />
          </IconButton>
        </div>
        <Paper elevation={2} style={{ maxHeight: "700px", overflow: "auto" }}>
          <List>
            {users.map((d, idx) => (
              <ListItemUser
                key={d.id}
                color={d.color}
                primaryText={`${d.name}`}
                secondaryText={`${d.year}`}
              />
            ))}
            {newUsers.map((d) => (
              <ListItemUser
                key={d.id}
                image={d.avatar}
                primaryText={d.name}
                secondaryText={`${d.date}`}
              />
            ))}
          </List>
        </Paper>
      </div>
      {isDialogOpen && (
        <AddUserDialog
          open={isDialogOpen}
          onClose={closeDialog}
          users={newUsers}
          setUsers={setNewUsers}
        />
      )}
    </div>
  );
}

export default Custom;