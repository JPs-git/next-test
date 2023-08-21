'use client'
import React, { useState } from 'react'
import { Button, Modal, Input, Form } from 'antd'

export default function Existing() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [desireName, setDesireName] = useState('')
  const [desireCost, setDesireCost] = useState('')

  const handleChangeInput = (type, data) => {
    const hanldeChangeFunctions = {
      "desireName": setDesireName,
      "desireCost": setDesireCost,
    }
    if (typeof hanldeChangeFunctions[type] === 'function') {
      hanldeChangeFunctions[type](data)
    }
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log(desireName, desireCost);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item
            label="desireName"
            name="desireName"
          >
            <Input
              onChange={(e) => handleChangeInput('desireName', e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="desireCost"
            name="desireCost"
          >
            <Input
              onChange={(e) => handleChangeInput('desireCost', e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
