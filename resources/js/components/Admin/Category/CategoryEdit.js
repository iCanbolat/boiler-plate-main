import {Form, Input, Button, Select, message, Switch} from 'antd';
import {getRequest, patchRequest, postRequest} from '../../../config/axiosClient';
import {Option} from 'antd/es/mentions';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom/cjs/react-router-dom';
import TextEditor from '../Common/TextEditor';

export default function CategoryEdit() {
    const {id} = useParams();
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [selectloading, setSelectLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const langs = ['TR', 'EN'];
    useEffect(() => {
        getRequest('admin/category')
            .then(response => {
                setCategories(response.data.data);
                setSelectLoading(false);
            });
        getRequest(`admin/category/${id}`)
            .then(response => {
                setCategory(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error.response)
            })
    }, [])
    const onFinish = (values) => {
        patchRequest(`admin/category/${id}`, values)
            .then(res => {
                message.success('Gönderi başarıyla güncellenmiştir.')
                setCategory(res.data.data);
            });
    }
    const onFinishFailed = () => {

    }
    const onGenderChange = () => {

    }
    return (
        !loading &&
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={category}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item name="parent_id" label="Üst kategori" rules={[{ required: false }]}>
                <Select
                    placeholder="Lütfen kategori seçiniz"
                    onChange={onGenderChange}
                    allowClear
                    loading={selectloading}
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
    )
}
