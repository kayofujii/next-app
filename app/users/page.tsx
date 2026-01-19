interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-store' }).then(res => res.json());

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
        <table className='table table-zebra border'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        ))}</tbody>
        </table>
    </div>
  )
}

export default UsersPage