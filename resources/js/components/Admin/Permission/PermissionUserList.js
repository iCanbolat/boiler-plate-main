import {useEffect, useState} from 'react';
import {deleteRequest, getRequest} from '../../../config/axiosClient';
import {message, Popconfirm, Space, Table} from 'antd';
import {Link} from 'react-router-dom';

export default function PermissionUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      title: 'Ad soyad',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        const permissionTo = {
          pathname: `/permission/${record.id}`,
          name: record.name,
        };
        return <Space size="middle">
          <Link to={permissionTo}>İzinleri Düzenle</Link>
        </Space>
      },
    },
  ];
  useEffect(() => {
    getRequest('admin/users')
      .then(response => {
        setUsers(response.data.data);
        setLoading(false);
      }).catch(error => {
        message.error(error.response.data.message);
        setLoading(false);
      });
  }, []);
  return (
    <Table rowKey="id" loading={loading} columns={columns} dataSource={users} />
  )
}
