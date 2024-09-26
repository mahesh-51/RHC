import React from "react";
import { Button, Card, CardBody, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UploadFiles: React.FC = () => {
  const navigate = useNavigate()
  const handleAddButtonClick = () =>{
    navigate("/admin/add-upload-files");
  }
  return (
    <div className="p-3">
    <h3 className="text-center display-6 py-2">Upload Files</h3>
    <Card className='shadow py-5'>
        <CardBody>
          <div className='pb-3 d-flex justify-content-start'>
            <Button className=' btn btn-success px-4 shadow-lg' onClick={handleAddButtonClick}>
              Add
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UploadFiles;
