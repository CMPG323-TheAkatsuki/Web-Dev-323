import React, { useState, useEffect } from "react";

const UserAdministraOnPage = () => {
    const [user, setUser] = useState({
        studentNo: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        role: "Student", // Default role as Student
    });

    const [userList, setUserList] = useState([]);
    const [action, setAction] = useState("add"); // Default action
    const apiUrl = "http://localhost:3000/api/users"; // Your Express API URL

    // Fetch users from the backend when the component loads
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setUserList(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle radio button change for role (Student or Lecturer)
    const handleRoleChange = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            role: e.target.value,
        }));
    };

    // Handle admin action selection (Add, Update, Delete)
    const handleActionChange = (e) => {
        setAction(e.target.value);
    };

    // Add user to the list (API POST call)
    const handleAdd = () => {
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((newUser) => {
                setUserList((prevList) => [...prevList, newUser]);
                clearForm();
            })
            .catch((error) => console.error("Error adding user:", error));
    };

    // Update user in the list based on Student No (API PUT call)
    const handleUpdate = () => {
        fetch(`${apiUrl}/${user.studentNo}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((updatedUser) => {
                setUserList((prevList) =>
                    prevList.map((u) => (u.studentNo === user.studentNo ? updatedUser : u))
                );
                clearForm();
            })
            .catch((error) => console.error("Error updating user:", error));
    };

    // Delete user from the list based on Student No (API DELETE call)
    const handleDelete = () => {
        fetch(`${apiUrl}/${user.studentNo}`, {
            method: "DELETE",
        })
            .then(() => {
                setUserList((prevList) =>
                    prevList.filter((u) => u.studentNo !== user.studentNo)
                );
                clearForm();
            })
            .catch((error) => console.error("Error deleting user:", error));
    };

    // Submit action handler based on selected admin action
    const handleSubmit = () => {
        if (action === "add") {
            handleAdd();
        } else if (action === "update") {
            handleUpdate();
        } else if (action === "delete") {
            handleDelete();
        }
    };

    // Clear form after submit
    const clearForm = () => {
        setUser({
            studentNo: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            role: "Student",
        });
    };

    return (
        <div>
            <h2>User Administration</h2>
            <form>
                <input
                    type="text"
                    name="studentNo"
                    placeholder="Student Number"
                    value={user.studentNo}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={user.emailAddress}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Student"
                            checked={user.role === "Student"}
                            onChange={handleRoleChange}
                        />
                        Student
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Lecturer"
                            checked={user.role === "Lecturer"}
                            onChange={handleRoleChange}
                        />
                        Lecturer
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            name="action"
                            value="add"
                            checked={action === "add"}
                            onChange={handleActionChange}
                        />
                        Add
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="action"
                            value="update"
                            checked={action === "update"}
                            onChange={handleActionChange}
                        />
                        Update
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="action"
                            value="delete"
                            checked={action === "delete"}
                            onChange={handleActionChange}
                        />
                        Delete
                    </label>
                </div>

                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>

            <h3>User List</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Student No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.studentNo}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.emailAddress}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserAdministraOnPage;

