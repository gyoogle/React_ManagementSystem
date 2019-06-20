import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerUpdate from './CustomerUpdate';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell>
                    <CustomerUpdate stateRefresh={this.props.stateRefresh} id = {this.props.id} image = {this.props.image} name = {this.props.name} birthday = {this.props.birthday} gender = {this.props.gender} job = {this.props.job} />
                    <CustomerDelete stateRefresh={this.props.stateRefresh} id = {this.props.id}/>
                </TableCell>
            </TableRow>
        )
    }
}

export default Customer;