interface props {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  btDone: (id: string) => void;
};
export default function TaskCard({
  id,
  title,
  description,
  isDone,
  btDone,
}: props) {
  const toggleDone = () => {
    btDone(id);
  };
  return (
    <div key={id} className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <h5
              className={
                isDone == true
                  ? "text-decoration-line-through card-title"
                  : "card-title"
              }
            >
              {title}
            </h5>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <p className="card-text">{description}</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-success me-2" onClick={toggleDone}>Done</button>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
