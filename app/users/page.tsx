import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 10 } }).then(res => res.json());

  return (
    <div>
        {users.map((user: User) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
  )
}

export default UsersPage