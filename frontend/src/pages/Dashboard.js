import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <h1>Welcome back nahid</h1>
      <div className="m-5">
        <Link to="/create-note">
          <Button>Create A Note</Button>
        </Link>
      </div>
      <div className="m-5">
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between">
              <div>Card Title</div>
              <div>
                <Button variant="warning" className="me-2">
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Dashboard
