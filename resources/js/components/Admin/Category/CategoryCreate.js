import {Form, Input, Button, Checkbox, Select, message, Switch} from 'antd';
import {getRequest, postRequest} from '../../../config/axiosClient';
import {Option} from 'antd/es/mentions';
import {useEffect, useState} from 'react';
import TextEditor from '../Common/TextEditor';
import {Link} from 'react-router-dom';

export default function CategoryCreate() {
    const [form] = Form.useForm();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const langs = ['TR', 'EN'];
    useEffect(() => {
        getRequest('admin/category')
            .then(response => {
                setCategories(response.data.data);
                setLoading(false);
            });
    }, [])
    const onFinish = (values) => {
        postRequest('admin/category', values)
            .then(res => {
                message.success('Gönderi başarıyla kayıt edilmiştir.')
                form.resetFields();
            });
    }
    const onFinishFailed = () => {

    }
    const onGenderChange = () => {

    }
    return (
        <>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                initialValues={{ status: true }}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item name="parent_id" label="Üst kategori" rules={[{ required: false }]}>
                    <Select
                        placeholder="Lütfen kategori seçiniz"
                        onChange={onGenderChange}
                        allowClear
                        loading={loading}
                    >
                        {categories.map(category => <Option value={category.id}>{category.name}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name="lang" label="Dil Seçiniz" rules={[{ required: false }]}>
                    <Select
                        placeholder="Lütfen dil seçiniz"
                        onChange={onGenderChange}
                        allowClear
                        loading={loading}
                    >
                        {langs.map(lang => <Option value={lang}>{lang}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Başlık"
                    name="name"
                    rules={[{ required: true, message: 'Lütfen başlık giriniz!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description">
                    <TextEditor value="just a value" onChange={(e) => console.log(e)} />
                </Form.Item>
                <Form.Item
                    label="Sırası"
                    name="order"
                    rules={[{ required: true, message: 'Lütfen sırasını yazınız!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="status">
                    <Switch defaultChecked  />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
