import React from "react";
import Layout from "../ContactUS/layout/index";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import './ContactUS.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import 'semantic-ui-css/semantic.min.css';
import Header from "../../components/Header/Header";
import SidebarNav from "../../components/SideBarNav/SidebarNav";


const SERVICE_ID = "service_sgt942r";
const TEMPLATE_ID = "template_jp5dc5s";
const USER_ID = "zHEe0vj_kNIUGEsht";

const ContactFormComponent = () => {
  const handleOnSubmit = (e:any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  let [menuState, setMenuState] = React.useState(false);

return (
    <div className="ContactFormComponent">
            <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-phone'
          control={Input}
          label='Phone'
          name='user_phone'
          placeholder='Phone number'
          required
          icon='phone circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  );
}

const ContactForm = () => {
  return <Layout children={<ContactFormComponent />} />;
};

export default ContactForm;