import axios from "axios";
import React, { useEffect } from "react";

export default function AxiosGet() {

  const [post, setPosts] = React.useState<any[]>([]);

  useEffect(() => {
    let res = axios.get("https://reqres.in/api/users");
    res
      .then((response: any) => setPosts(response.data.data))
      .catch((err: any) => alert("error: " + err));
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">SrNo.</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {post.map((item) => (
            <tr key={item.id} className="table-success">
              <th scope="row">{item.id}</th>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td><img src={item.avatar} alt="img"></img></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
