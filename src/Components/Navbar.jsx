import { Button, Modal } from 'antd';
import { useState } from 'react';
import styles from '@/styles/Navbar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <nav>
    <div className={styles.logo}>
  <img className={styles.image} src="Logo.jpg" alt="logo image" />
  <span>Parcel</span> <span className={styles.drop}>drop</span>
  </div>


     <div className={styles.modalContainer}>
    <AiOutlineMenu onClick={() => setModal1Open(true)}/>
    <Modal
   
    style={{
      top: 0,
    }}
    open={modal1Open}
    onOk={() => setModal1Open(false)}
    onCancel={() => setModal1Open(false)}
  >
    <a href=""><h3>Home</h3></a>
<a href=""><h3>About</h3></a>
     <a href="#business"><h3>Business</h3></a>
    <a href=""><h3>Experience</h3></a>
    <a href=""><h3>Mission</h3></a>
   <a href=""><h3>How it work</h3></a>
 
    

  </Modal>
  <br />
  <br />
  
  <Modal 
    title="Vertically centered modal dialog"
    centered
    open={modal2Open}
    onOk={() => setModal2Open(false)}
    onCancel={() => setModal2Open(false)}
  >
  
  </Modal>
     </div>
    </nav>
  );
};
export default App;