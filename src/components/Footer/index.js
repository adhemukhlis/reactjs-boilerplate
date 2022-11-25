// refactor passed
import React from 'react'
import { Row, Col, Layout, Typography } from 'antd'
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons'

const { Text, Title } = Typography
const { Footer } = Layout

const FooterComponent = () => {
	const officeAddress = 'JL. Pabuaran - Purwokerto Utara, Jawa Tengah, Indonesia.'
	const helpDeskEmail = 'helpdesk@mca.id'
	const helpDeskPhoneNumber = '+62 543-7777-9999'
	const companyName = 'PT Mencari Cinta Abadi'
	return (
		<Footer className="Footer">
			<Row className="gutter-24" justify="center">
				{/* <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
					{!!gcoSettingLogoFooter && (
						<img
							style={{
								width: '10rem',
								objectFit: 'contain'
							}}
							src={gcoSettingLogoFooter}
						/>
					)}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column'
						}}>
						<Text strong>Alat Bantu Transaksi Kripto</Text>
						<Text italic>kendali penuh ditangan Anda</Text>
					</div>
				</Col> */}
				<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
					<Title level={4} style={{ fontSize: '20px' }}>
						Alamat Pusat
					</Title>
					<Row className="gutter-12">
						<Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={2} />
						<Col>
							<Text strong style={{ fontSize: '16px' }}>
								{companyName}
							</Text>
						</Col>
					</Row>
					<Row className="gutter-12">
						<Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={2}>
							<EnvironmentOutlined
								style={{
									fontSize: '185%'
								}}
							/>
						</Col>
						<Col span={14}>
							<Text style={{ fontSize: '16px' }}>{officeAddress}</Text>
						</Col>
					</Row>
					<Title level={5} style={{ marginTop: '1rem' }}>
						Layanan Pengaduan Konsumen
					</Title>
					<Row className="gutter-12">
						<Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={2}>
							<PhoneOutlined
								style={{
									fontSize: '185%'
								}}
							/>
						</Col>
						<Col span={14}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column'
								}}>
								<Text style={{ fontSize: '16px' }}>{helpDeskPhoneNumber}</Text>
								<a href={`mailto:${helpDeskEmail}`} style={{ fontSize: '16px' }}>
									{helpDeskEmail}
								</a>
							</div>
						</Col>
					</Row>
				</Col>
				<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
					<Title level={4} style={{ fontSize: '20px' }}>
						Layanan Pengaduan Konsumen
					</Title>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Text style={{ fontSize: '16px' }}>
							Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
						</Text>
						<Text style={{ fontSize: '16px' }}>
							Kementerian Perdagangan RI - Whatsapp ( WA ) +62 853 11111 010 ( Text only )
						</Text>
					</div>
				</Col>
			</Row>
		</Footer>
	)
}

export default FooterComponent
