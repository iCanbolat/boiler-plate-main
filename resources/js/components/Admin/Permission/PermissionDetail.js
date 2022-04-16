import {useParams} from 'react-router-dom/cjs/react-router-dom';
import {useEffect, useState} from 'react';
import {getRequest, patchRequest} from '../../../config/axiosClient';
import {Form, Input, Button, Checkbox, message, Select} from 'antd';

export default function PermissionDetail() {
  const { Option } = Select;
  const {id} = useParams();
  const [permissions, setPermissions] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [user, setUser] = useState(null);
  const onFinish = (values) => {
    setLoadingButton(true);
    patchRequest('admin/permission/', values)
        .then(res => {
            message.success('İzinler başarılı ile güncellenmiştir')
                .then(() => setLoadingButton(false))
        })
        .catch(err => {
            message.error(err.response.data.messsage);
            setLoading(false);
        })
  };
  useEffect(() => {
    getRequest('admin/permission/')
      .then(response => {
        setPermissions(response.data.data);
        setAbilities(response.data.data.filter(perm => perm.val).map(perm => perm.name));
      }).catch(error => {
        message.error(error.response.data.message);
        setLoading(false);
      });
    getRequest(`admin/users/${id}`).then(res => {
        setUser(res.data.data);
        setLoading(false);
    })
  }, []);
  return  !loading && <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      permission: abilities,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label={`${user.name} için izinleri düzenle`}
      name="permission"
    >
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
      >
        {permissions.map(permission => <Option key={permission.id} value={permission.name}>{permission.name}</Option>)}
      </Select>
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button loading={loadingButton} type="primary" htmlType="submit">
              Kayıt Et
      </Button>
    </Form.Item>
  </Form>
}
