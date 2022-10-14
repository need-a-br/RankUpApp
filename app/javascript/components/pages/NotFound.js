import React from "react"
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const NotFound = () => {
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Page Not Found"
            src="../photos/NotFound.jpeg"
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h1">
              Page Not Found
            </CardTitle>
            <CardTitle tag="h4">
              Page Not Found
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    )
}

export default NotFound