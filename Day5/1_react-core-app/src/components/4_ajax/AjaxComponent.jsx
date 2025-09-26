import React, { Component, useEffect, useState } from 'react';
import LoaderAnimation from '../common/LoaderAnimation';
import DataTable from '../common/DataTable';
import postApiClient from '../../services/post-api-client';

// class AjaxComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             message: "Loading data, please wait...",
//             flag: false
//         };
//     }

//     // componentDidMount() {
//     //     postApiClient.getAllPosts().then(data => {
//     //         this.setState({
//     //             data: data,
//     //             message: "",
//     //             flag: true
//     //         });
//     //     }).catch(eMsg => {
//     //         this.setState({
//     //             message: eMsg,
//     //             flag: true
//     //         });
//     //     });
//     // }

//     async componentDidMount() {
//         try {
//             const data = await postApiClient.getAllPostsAsync();
//             this.setState({
//                 data: data,
//                 message: "",
//                 flag: true
//             });
//         } catch (eMsg) {
//             this.setState({
//                 message: eMsg,
//                 flag: true
//             });
//         }
//     }

//     render() {
//         return (
//             <>
//                 <div className="row mt-5">
//                     <h4 className="text-warning text-center text-uppercase font-weight-bold">{this.state.message}</h4>
//                 </div>

//                 {
//                     !this.state.flag
//                         ? <LoaderAnimation />
//                         : (<DataTable items={this.state.data}>
//                             <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
//                         </DataTable>)
//                 }
//             </>
//         );
//     }
// }

const AjaxComponent = () => {
    const [cState, setCState] = useState({
        data: [],
        message: "Loading data, please wait...",
        flag: false
    });

    // useEffect(() => {
    //     postApiClient.getAllPosts().then(data => {
    //         setCState({
    //             data: data,
    //             message: "",
    //             flag: true
    //         });
    //     }).catch(eMsg => {
    //         setCState({
    //             message: eMsg,
    //             flag: true
    //         });
    //     });
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await postApiClient.getAllPostsAsync();
                setCState({
                    data: data,
                    message: "",
                    flag: true
                });
            } catch (eMsg) {
                setCState({
                    message: eMsg,
                    flag: true
                });
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{cState.message}</h4>
            </div>

            {
                !cState.flag
                    ? <LoaderAnimation />
                    : (<DataTable items={cState.data}>
                        <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                    </DataTable>)
            }
        </>
    );
}

export default AjaxComponent;