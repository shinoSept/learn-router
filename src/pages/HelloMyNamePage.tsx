export default function HelloMyNamePage() {
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
      />
      <button className="btn btn-primary">Greet Me</button>
      {/* Result Text */}
      <p></p>
    </div>
  );
}
