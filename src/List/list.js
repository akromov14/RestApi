import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setList } from '../redux/action';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const List = () => {
    const { menu } = useParams();
    console.log("list ichida", menu);

    const dispatch = useDispatch(); 

    useEffect(() => {
        setList(dispatch);
    }, []);

    const data = useSelector(state => state.list);

    return (
        <div>
            <h1>List page</h1>
            <Table>
                <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>userId</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>completed</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                        {
                            data.map(v =>
                                <TableRow>
                                    <TableCell>{v.id}</TableCell>
                                    <TableCell>{v.userId}</TableCell>
                                    <TableCell>{v.title}</TableCell>
                                    <TableCell>{v.completed}</TableCell>
                                </TableRow>
                                )
                        }
                </TableBody>
               </Table>
            
        </div>
    )
}

export default List
