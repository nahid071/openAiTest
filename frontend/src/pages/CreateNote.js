import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

const CreateNote = () => {
  return (
    <>
      <h1>Create a new Note</h1>

      <div className="m-5">
        <Card>
          <Card.Header>Create Note</Card.Header>
          <Card.Body>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="title" placeholder="Enter Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="content">
                  <Form.Label>Content</Form.Label>
                  <Form.Control type="text" placeholder="Type Content" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Type a category" />
                </Form.Group>

                <Button variant="success" className="me-2">
                  Create Note
                </Button>
                <Button variant="warning">Reset Fields</Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default CreateNote
