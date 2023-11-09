
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const element = useRef();

    const getData = () => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/todos").then(function (response) {
            setData(response.data);
            setLoading(false);
        }).catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        document.title = "ეს არის ჩემი საიტი";
        console.log(element.current);
    }, []);

    return (
        <div className="container">
            <div className="row mb-3 mt-3">
                <button className="btn btn-primary" onClick={getData}>Get data</button>
            </div>
            <div className="row">
                <div className="col-12">
                    <center>
                        <span className={loading ? 'spinner spinner-border text-success mb-3' : 'd-none'}></span>
                    </center>
                    <div className={loading ? 'd-none' : 'd-block'}>
                        <table className="table table-bordered" ref={element}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User Id</th>
                                    <th>title</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.userId}</td>
                                            <td>{item.title}</td>
                                            <td className={item.completed ? 'table-success' : 'table-danger'}>
                                                {item.completed ? 'ჭეშმარიტი' : 'მცდარი'}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);


