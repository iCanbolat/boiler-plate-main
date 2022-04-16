import {Button, message, Popconfirm, Space, Table} from 'antd';
import {useEffect, useState} from 'react';
import {deleteRequest, getRequest} from '../../../config/axiosClient';
import {Link} from 'react-router-dom';

export default function ContactList(){
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteRecord = (id) => {
    setLoading(true);
    deleteRequest(`admin/contact/${id}`)
      .then(response => {
        const list = data.filter(x => x.id !== id)
        setData(list);
        setLoading(false);
      })
      .catch(error => {
        message.error(error.response.data.message);
        setLoading(false);
      })
  }
  const columns = [
    {
      title: 'Ad soyad',
      dataIndex: 'name',
    },
    {
      title: 'Konu',
      dataIndex: 'subject',
    },
    {
      title: 'Telefon numarası',
      dataIndex: 'phone',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteRecord(record.id)}>
            <a>Sil</a>
          </Popconfirm>
            <Link to={`contact/${record.id}`}>Detay</Link>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getRequest('admin/contact')
      .then(response => {
        setData(response.data.data);
        setLoading(false);
      });
  }, []);
  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const deleteMultiple = () => {
      setLoading(true);
      deleteRequest(`admin/contact/${selectedRowKeys.join(',')}`)
          .then(response => {
              const list = data.filter(x => !selectedRowKeys.includes(x.id))
              setData(list);
              setSelectedRowKeys([]);
              setLoading(false);
          })
          .catch(error => {
              message.error(error.response.data.message);
              setLoading(false);
          })
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  }
  return (
      <>
      <Table rowKey="id" loading={loading} rowSelection={rowSelection} columns={columns} dataSource={data} />
          {selectedRowKeys.length ? <Popconfirm title="sure to delete?" onConfirm={deleteMultiple}>
              <Button danger>Toplu Sil</Button></Popconfirm> : null}
      </>
  )
}
