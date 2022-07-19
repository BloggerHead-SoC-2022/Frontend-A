import Button from 'react-bootstrap/Button';

function VariantsExample() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Button variant="flat" size="xl">
        Login
      </Button>
    </>
  );
}

export default VariantsExample;