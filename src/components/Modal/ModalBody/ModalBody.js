import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import classes from "./ModalBody.css";
import modalImg from './images/Online-Shopping-1.jpg'
import { NavLink } from "react-router-dom";

let ModalComponents = {
    title: `Xush kelibsiz!`,
    height: '565px'
}

const renderPhoneInput = () => {
    return (
        <>
            <label className={classes.InpText} htmlFor="numInp">Telefon raqam</label>
            <div className={classes.DropInput}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className={classes.DropdownToggle}>
                        +998
                            </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <hr />
                <input type="text" id="numInp" className={classes.NumInp} placeholder="XX XXX XX XX" required />
            </div>
        </>
    )
}

const createInput = (htmlFor, label, type, id, placeholder) => {
    return (
        <>
            <label className={classes.ModalPass} htmlFor={htmlFor} >
                {label}
            </label>
            <input type={type} id={id} className={classes.PassInp} placeholder={placeholder} required />
        </>
    )
}

const renderCheckbox = () => {
    return (
        <div className={classes.ModalCheck}>
            <input type="checkbox" id="check" className={classes.CheckInp} />
            <label htmlFor="check">Eslab qolish</label>
        </div>
    )
}

const firstClick = () => {
    toggles.toLogin = 'none'
    toggles.toSendCode = 'block'
    ModalComponents.title = 'Ro’yxatdan o’tish'
}

const toBack = () => {
    toggles.toLogin = 'block'
    toggles.toSendCode = 'none'
    toggles.toCheck = 'none'
    toggles.toRegister = 'none'
    ModalComponents.title = 'Xush kelibsiz!'
    ModalComponents.height = '565px'
}

const secondClick = () => {
    toggles.toSendCode = 'none'
    toggles.toCheck = 'block'
}

const thirdBtn = () => {
    toggles.toSendCode = 'none'
    toggles.toCheck = 'none'
    toggles.toRegister = 'block'
    ModalComponents.height = '655px'
}

const renderModalBottomLinks = () => {
    return (<>
        <NavLink className={classes.ModalBtn} to="#!">Kirish</NavLink>
        <NavLink className={classes.ModalBottomLinkBlack} to="#!">Parolni unutdingizmi?</NavLink>
        <NavLink className={classes.ModalBottomLink} to="#!" onClick={firstClick}>Ro’yhatdan o’tish</NavLink>
    </>)
}

const RegisterItems = [
    { label: 'Ism', placeholder: 'Ismoilbek', id: 'name', type: 'text' },
    { label: 'Familiya', placeholder: 'Ma’murov', id: 'surname', type: 'text' },
    { label: 'Parol', placeholder: '***********', id: 'password', type: 'password' },
    { label: 'Parolni takrorlang', placeholder: '***********', id: 'checkPass', type: 'password' },
]

const registerItems = () => {
    return RegisterItems.map((item, index) => {
        return createInput(item.id, item.label, item.type, item.id, item.placeholder)
    })
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Forms
const renderFormToLogin = () => {
    return (
        <form action="">
            <div className={classes.ModalInfo}>
                {renderPhoneInput()}
                <div>
                    {createInput('password', 'Parol', 'password', 'password', 'Parol')}
                    {renderCheckbox()}
                </div>
                <div className={classes.ModalBottom}>
                    {renderModalBottomLinks()}
                </div>
            </div>
        </form>
    )
}

const renderFormToSendCode = () => {
    return (
        <form action="">
            <div className={classes.ModalInfo}>
                {renderPhoneInput()}
                <p className={classes.NumberLabel}>Kod yuborishimiz uchun mavjud raqamingizni kiriting</p>
                <div className={classes.ModalBottom}>
                    <NavLink className={classes.ModalBtn} to="#!" onClick={secondClick}>Davom etish</NavLink>
                    <NavLink className={classes.ModalBottomLink} to="#!" onClick={toBack} >Akkauntga kirish</NavLink>
                </div>
            </div>
        </form>
    )
}

const renderFormToCheck = () => {
    return (
        <form action="">
            <div className={classes.ModalInfo}>
                {createInput('check', 'Tasdiqlash', 'text', 'check', '_ _ _ _')}
                <p className={classes.NumberLabel}>Telefon raqamingizga yuborilgan 4 xonali kodni kiriting</p>
                <div className={classes.ModalBottom}>
                    <NavLink className={classes.ModalBtn} to="#!" onClick={thirdBtn}>Tasdiqlash</NavLink>
                    <NavLink className={classes.ModalBottomLink} to="#!" onClick={toBack}>Ortga qaytish</NavLink>
                </div>
            </div>
        </form>
    )
}

const renderFormToRegister = () => {
    return (
        <form action="">
            <div className={classes.ModalInfo}>
                {registerItems()}
                <div className={classes.ModalBottom}>
                    <NavLink className={classes.ModalBtn} to="#!" >Davom etish</NavLink>
                    <NavLink className={classes.ModalBottomLink} to="#!" onClick={toBack}>Ortga qaytish</NavLink>
                </div>
            </div>
        </form>
    )
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const toggles = {
    toLogin: 'block',
    toSendCode: 'none',
    toCheck: 'none',
    toRegister: 'none'
}

const ModalBody = (props) => {
    const ModalCls = [classes.ModalBody]
    if (props.isOpen) {
        ModalCls.push(classes.open)
    } else {
        ModalCls.push(classes.close)
    }
    return (
        <Container className={classes.ModalContainer}>
            <Row style={{ justifyContent: 'center' }}>
                <Col xs="12" lg="9">
                    <div className={ModalCls.join(' ')} style={{ height: ModalComponents.height }}>
                        <div className={classes.Times}>
                            <button onClick={props.onToggle}>
                                <i className="fa fa-times"></i>
                            </button>
                            <h2 className={classes.ModalTitle}>{ModalComponents.title}</h2>
                        </div>
                        <Row className={classes.ModalFlex} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Col lg="6" xs="12" className="d-none d-lg-block">
                                <div className={classes.ModalImg}>
                                    <img src={modalImg} alt="jpg" />
                                </div>
                            </Col>
                            <Col lg="5" xs="12">
                                <div style={{ display: toggles.toLogin }}>
                                    {renderFormToLogin()}
                                </div>

                                <div style={{ display: toggles.toSendCode }}>
                                    {renderFormToSendCode()}
                                </div>

                                <div style={{ display: toggles.toCheck }}>
                                    {renderFormToCheck()}
                                </div>

                                <div style={{ display: toggles.toRegister }}>
                                    {renderFormToRegister()}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ModalBody;
