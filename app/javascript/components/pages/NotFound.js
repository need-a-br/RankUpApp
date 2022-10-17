import React from "react"
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const NotFound = () => {
    return (
        <div >
        <Card inverse >
          <CardImg
            alt="Page Not Found"
            src="../photos/NotFound.jpeg"
            width="100%"
          />
          <CardImgOverlay >
            <CardTitle className="not_found" tag="h1">
              Page Not Found
            </CardTitle>
            <CardTitle className="not_found" tag="h2">
              Page Not Found
            </CardTitle>
            <CardTitle className="not_found" tag="h3">
              Page Not Found
            </CardTitle>
            <CardTitle className="not_found" tag="h4">
              Page Not Found
            </CardTitle>
            <CardTitle className="not_found" tag="h5">
              Page Not Found
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    )
}

export default NotFound