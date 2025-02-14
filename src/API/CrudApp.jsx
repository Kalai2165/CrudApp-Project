import { useState, useEffect } from "react";

function CrudApp() {
    const [result, setResult] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [editUser, setEditUser] = useState(null);

    // Fetch user data when the component mounts
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => data.json())
            .then((res) => setResult(res))
            .catch((err) => console.log(err));
    }, []);

    // Handle Add & Edit User Data
    function handleUserData() {
        const userName = name.trim();
        const userPhone = phone.trim();
        const userWebsite = website.trim();

        if (!userName || !userPhone || !userWebsite) {
            alert("All fields are required!");
            return;
        }

        if (editUser) {
            // Updating existing user
            fetch(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ name: userName, phone: userPhone, website: userWebsite }),
            })
                .then((res) => res.json())
                .then((updatedUser) => {
                    setResult(result.map((user) => (user.id === editUser.id ? updatedUser : user)));
                    resetForm();
                });
        } else {
            // Adding new user
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ name: userName, phone: userPhone, website: userWebsite }),
            })
                .then((res) => res.json())
                .then((newUser) => {
                    setResult([...result, newUser]);
                    resetForm();
                });
        }
    }

    // Handle Edit Button Click
    function handleEdit(user) {
        setName(user.name);
        setPhone(user.phone);
        setWebsite(user.website);
        setEditUser(user);
    }

    // Handle Delete User
    function handleDelete(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'DELETE' })
            .then(() => {
                setResult(result.filter((user) => user.id !== id));
            });
    }

    // Reset Form
    function resetForm() {
        setName('');
        setPhone('');
        setWebsite('');
        setEditUser(null);
    }

    return (
        <div>
            <h1>CrudApp using API Call</h1>

            {/* Input Fields */}
            <label>Enter User Name</label>
            <input type='text' placeholder='Enter User Name' value={name} onChange={(e) => setName(e.target.value)} /><br />

            <label>Enter User Phone Number</label>
            <input type='tel' placeholder='Enter User Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} /><br />

            <label>Enter User Website</label>
            <input type='text' placeholder='Enter User Website' value={website} onChange={(e) => setWebsite(e.target.value)} /><br />

            <button onClick={handleUserData}>{editUser ? "Update User" : "Add New Data"}</button>

            <hr />

            {/* Table for displaying users */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>S NO</th>
                        <th>User Name</th>
                        <th>User Phone Number</th>
                        <th>User Website</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => handleEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CrudApp;
