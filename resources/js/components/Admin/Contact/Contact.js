import {useParams} from 'react-router-dom/cjs/react-router-dom';
import {useEffect, useState} from 'react';
import {getRequest} from '../../../config/axiosClient';
import {Col, Row} from 'antd';

export default function Contact() {
    const {id} = useParams();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getRequest(`admin/contact/${id}`)
            .then(response => {
                setContact(response.data.data);
                setLoading(false);
            })
    }, []);
    return (
        !loading && <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>Ad Soyad</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>{contact.name}</div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>Email adresi</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>{contact.email}</div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>Email adresi</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>{contact.email}</div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>Telefon Numarası</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>{contact.phone}</div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>Konu</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>{contact.subject}</div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>Mesaj</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>{contact.message}</div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div>IP Adresi</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>{contact.ip}</div>
                </Col>
            </Row>
        </>
    )
}
