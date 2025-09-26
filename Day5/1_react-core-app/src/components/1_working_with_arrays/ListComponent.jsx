import React, { useState } from 'react';

const ListItem = ({ item }) => <li className='list-group-item'>{item.name}</li>

const ListComponent = ({ items }) => {
    return (
        <ul className='list-group'>
            {
                items.map((item) => {
                    return <ListItem key={item.id} item={item} />
                })
            }
        </ul>
    );
};

const Tr = ({ item }) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
                <a href="/#" className='text-info'>Details</a>
            </td>
            <td>
                <a href="/#" className='text-warning'>Edit</a>
            </td>
            <td>
                <a href="/#" className='text-danger'>Delete</a>
            </td>
        </tr>
    );
}

const TableComponent = (props) => {
    return (
        <>
            {props.children && props.children}
            <hr />
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th></th>
                        <th>ACTIONS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map((item) => {
                            return <Tr key={item.id} item={item} />
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

const ListRoot = () => {
    const [employees] = useState([
        { id: 1, name: "Manish" },
        { id: 2, name: "Abhijeet" },
        { id: 3, name: "Ramakant" },
        { id: 4, name: "Subodh" },
        { id: 5, name: "Abhishek" }
    ]);

    const [posts] = useState([
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ]);

    return (
        <div>
            {/* <ListComponent items={employees} /> */}
            <TableComponent items={employees}>
                <h3 className='text-center text-info'>Employee Table</h3>
            </TableComponent>
            <hr />
            <TableComponent items={posts}>
                <h3 className='text-center text-info'>Post Table</h3>
            </TableComponent>
        </div>
    );
};

export default ListRoot;