import React, {useEffect, useState} from 'react';
import { getAllPostsAsyncComponent } from '../../services/post-api-client';
import DataTable from '../../components/common/DataTable';

const AdminComponentMine = () => {
    const [cState, setCState] = useState({
        data: [],
        message: "Loading data, please wait..."
    });

    useEffect(() => {
        const fetchDataComponent = async () => {
            try {
                const data = await getAllPostsAsyncComponent();
                setCState({
                    data: data,
                    message: ""
                });
            } catch (eMsg) {
                setCState({
                    data: [],
                    message: eMsg.toString()
                });
            }
        };
        fetchDataComponent();
    }, []);

    return (
        <>
            <div>
                <h1 className="text-primary">Admin Component</h1>
                <h4 className="text-warning">
                    This is a Simple, {Array.isArray(cState.data) ? JSON.stringify(cState.data) : cState.data}
                </h4>
                <h3
                    className="text-danger">{cState.message}</h3>   
                    <DataTable items={cState.data}>
                        <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                    </DataTable>
            </div>
        </>
    );
};

export default AdminComponentMine;