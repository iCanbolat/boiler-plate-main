import {useEffect, useState} from 'react';
import {getRequest} from '../../../config/axiosClient';
import {useParams} from 'react-router-dom/cjs/react-router-dom';
import {Col, Row} from 'antd';

export default function Category() {
  const {id} = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRequest(`admin/category/${id}`)
      .then(res => {
          setCategory(res.data.data);
          setLoading(false);
      });
  }, [])
  return ( !loading &&
    <>

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
            <div>Üst Kategori</div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div>{category.parent?.name}</div>
        </Col>
    </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div>Başlık</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>{category.name}</div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div>Sıra</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div>{category.order}</div>
        </Col>
      </Row>
    </>
  )
}
