import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.unsplash.com/photo-1504691342899-4d92b50853e1?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </td>
            <td>Content writing</td>
            <td>30.<sup>00</sup></td>
            <td></td>
            <td>
<DeleteForeverOutlinedIcon/>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>programming</td>
            <td>20.<sup>00</sup></td>
            <td>22</td>
            <td>
            <DeleteForeverOutlinedIcon/>            </td>
          </tr>

        </table>
      </div>
    </div>
  );
}

export default MyGigs;
